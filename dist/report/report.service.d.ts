import { ReportType } from '../data';
import { ReportResponseDto } from "../dtos/report.dto";
interface reportData {
    amount: number;
    source: string;
}
interface UpdateReportData {
    amount?: number;
    source?: string;
}
export declare class ReportService {
    getAllReports(type: ReportType): ReportResponseDto[];
    getIncomeReportById(type: ReportType, id: string): ReportResponseDto;
    createReport(type: ReportType, { amount, source }: reportData): ReportResponseDto;
    updateReport(type: ReportType, id: string, body: UpdateReportData): ReportResponseDto;
    deleteReport(id: string): void;
}
export {};
