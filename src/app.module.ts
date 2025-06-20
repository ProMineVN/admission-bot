import { Module } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';

@Module({
  providers: [AdmissionsService],
  exports: [AdmissionsService],
})
export class AppModule {}