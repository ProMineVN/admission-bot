import 'reflect-metadata';
import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { MezonClient } from 'mezon-sdk';
import { AppModule } from './app.module';
import { AdmissionsService } from './admissions.service';

// chức năng chính
async function main() {
  // cấu hình môi trường cho ctrinh
  dotenv.config();
  process.on('uncaughtException', console.error);
  process.on('unhandledRejection', console.error);

  // khởi tạo client
  const mezonClient = new MezonClient(process.env.APPLICATION_TOKEN || '');
  await mezonClient.login();

  // Khởi tạo NestJS 
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: false,
  });
  const admissionsService = app.get(AdmissionsService);

  // nghe và bắt tin nhắn
  mezonClient.onChannelMessage(async (event: any) => {
    const messageText = event?.content?.t;
    if (!messageText || !messageText.startsWith('*')) return;

    const [command, ...args] = messageText.trim().split(' ');
    const channel = await mezonClient.channels.fetch(event.channel_id);

    switch (command) {
      case '*tuvantuyensinh':
      case '*tshelp': {
        const helpText = `🧭 ---Trợ lý tuyển sinh - Đồng hành cùng sĩ tử!---
Chào mừng bạn đến với bot tư vấn tuyển sinh, hiện tại là giữa tháng 6/2025, thời điểm nước rút để đưa ra quyết định! Bot có các lệnh sau (dữ liệu tham khảo 2024):
- \`*truong <mã trường>\` để xem thông tin (VD: \`*truong HUST\`).
- \`*nganh <khối thi>\` để xem gợi ý ngành (VD: \`*nganh A01\`).
- \`*diemchuan <mã trường>\` để xem điểm chuẩn (VD: \`*diemchuan NEU\`).`;
        await channel.send({ t: helpText });
        break;
      }

      case '*truong': {
        const uniCode = args[0];
        if (!uniCode) {
          await channel.send({ t: '⚠️ Vui lòng nhập mã trường (VD: `*truong HUST`).' });
          return;
        }
        const university = admissionsService.findUniversity(uniCode);
        if (!university) {
          await channel.send({ t: `❌ Không tìm thấy trường với mã \`${uniCode}\`.` });
          return;
        }
        const reply = admissionsService.formatUniversityInfo(university);
        await channel.send({ t: reply });
        break;
      }

      case '*nganh': {
        const block = args[0];
        if (!block) {
          await channel.send({ t: '⚠️ Vui lòng nhập khối thi (VD: `*nganh D01`).' });
          return;
        }
        const majors = admissionsService.findMajorsByBlock(block);
        const reply = admissionsService.formatMajorList(majors);
        await channel.send({ t: reply });
        break;
      }

      case '*diemchuan': {
        const uniCode = args[0];
        if (!uniCode) {
          await channel.send({ t: '⚠️ Vui lòng nhập mã trường (VD: `*diemchuan NEU`).' });
          return;
        }
        const university = admissionsService.findUniversity(uniCode);
        if (!university) {
            await channel.send({ t: `❌ Không tìm thấy trường với mã \`${uniCode}\`.` });
            return;
        }
        const scores = admissionsService.getScoresForUniversity(university.id);
        if (!scores) {
            await channel.send({ t: `❌ Không có dữ liệu điểm chuẩn cho trường \`${uniCode}\`.` });
            return;
        }
        const reply = admissionsService.formatScores(scores, university.name, 2024);
        await channel.send({ t: reply });
        break;
      }
    }
  });

  console.log('✅ Bot Trợ Lý Tuyển Sinh đang chạy!');
}

main().catch((error) => console.error('❌ Lỗi khởi động bot:', error));