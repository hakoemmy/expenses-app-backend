import { Injectable } from "@nestjs/common";
import { ReportType, data} from '../data';
import { v4 as uuid} from 'uuid';
import { ReportResponseDto } from "../dtos/report.dto";

interface reportData {
  amount: number, 
  source: string
};
interface UpdateReportData {
  amount?: number, 
  source?: string
};
@Injectable()
export class ReportService{
  getAllReports(type: ReportType): ReportResponseDto[]{
    return data.report.filter((report) => report.type === type).map(report => new ReportResponseDto(report));
  }

  getIncomeReportById(type: ReportType, id: string): ReportResponseDto{
    const report = data.report
    .filter((report) => report.type === type)
    .find((report) => report.id === id);

    if(!report) return;

    return new ReportResponseDto(report);
  }

  createReport(type: ReportType, {amount, source}: reportData): ReportResponseDto{
    const newReport = {
      id: uuid(),
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
      type
    }
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReport(type: ReportType, id: string, body: UpdateReportData): ReportResponseDto{
    const reportToBeUpdated = data.report
    .filter((report) => report.type === type)
    .find((report) => report.id === id);

    if(!reportToBeUpdated) return;
    const reportIndex = data.report.findIndex((report) => report.id === reportToBeUpdated.id);

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body
    }
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(id: string){
    const reportIndex = data.report.findIndex(report => report.id === id);
    if(reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}