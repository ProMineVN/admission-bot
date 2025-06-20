import { Injectable } from '@nestjs/common';
import * as db from './admissions.data';

@Injectable()
export class AdmissionsService {
  private LATEST_YEAR = 2024;

  public findUniversity(query: string) {
    const q = query.toUpperCase();
    return db.universities.find(u => u.id === q || u.code === q);
  }

  public findMajorsByBlock(block: string) {
    const b = block.toUpperCase();
    return db.majors.filter(m => m.blocks.includes(b));
  }

  public getScoresForUniversity(uniId: string, year: number = this.LATEST_YEAR) {
    const uniScores = db.scores[uniId.toUpperCase()];
    if (!uniScores) return null;

    const yearScores = uniScores.filter(s => s.year === year);
    
    return yearScores.map(score => {
      const majorInfo = db.majors.find(m => m.id === score.majorId);
      return { ...score, majorName: majorInfo?.name || 'Không rõ' };
    });
  }

  public formatUniversityInfo(uni: db.University): string {
    return `🏫 ${uni.name} (${uni.code})
- Website: ${uni.website}
- Fanpage: ${uni.fanpage}`;
  }

  public formatMajorList(majors: db.Major[]): string {
    if (majors.length === 0) return '❌ Không tìm thấy ngành nào phù hợp.';
    const list = majors.map(m => `- ${m.name} (${m.blocks.join(', ')})`).join('\n');
    return `📚 Các ngành gợi ý cho khối thi của bạn:\n${list}`;
  }
  
  public formatScores(scores: any[], uniName: string, year: number): string {
    if (scores.length === 0) return `❌ Không có dữ liệu điểm chuẩn năm ${year} cho trường ${uniName}.`;
    const list = scores
      .sort((a,b) => b.score - a.score)
      .map(s => `- ${s.majorName}: ${s.score} điểm (Khối ${s.block})`)
      .join('\n');
    return `🎯 Điểm chuẩn ${uniName} - năm ${year}\n${list}`;
  }
}