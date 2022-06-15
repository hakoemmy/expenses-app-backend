import { ReportService } from "./report.service";
import { CreateReportDto, UpdateReportDto, ReportResponseDto } from "../dtos/report.dto";
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    getAllIncomeReports(type: string): ReportResponseDto[];
    getIncomeReportById(type: string, id: string): ReportResponseDto;
    createReport(body: CreateReportDto, type: string): ReportResponseDto;
    updateReport(type: string, id: string, body: UpdateReportDto): ReportResponseDto;
    deleteReport(id: string): void;
}
