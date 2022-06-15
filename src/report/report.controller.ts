import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from "@nestjs/common";
import { data, ReportType } from "../data";
import { ReportService } from "./report.service";
import {
  CreateReportDto,
  UpdateReportDto,
  ReportResponseDto,
} from "../dtos/report.dto";

@Controller("/report/:type")
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  getAllIncomeReports(
    @Param("type", new ParseEnumPipe(ReportType)) type: string
  ): ReportResponseDto[] {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllReports(reportType);
  }

  @Get(":id")
  getIncomeReportById(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Param("id", ParseUUIDPipe) id: string
  ): ReportResponseDto {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getIncomeReportById(reportType, id);
  }

  @Post()
  createReport(
    @Body() body: CreateReportDto,
    @Param("type", new ParseEnumPipe(ReportType)) type: string
  ): ReportResponseDto {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, body);
  }

  @Put(":id")
  updateReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: string,
    @Param("id", ParseUUIDPipe) id: string,
    @Body("body") body: UpdateReportDto
  ): ReportResponseDto {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, id, body);
  }

  @HttpCode(204)
  @Delete(":id")
  deleteReport(@Param("id", ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id);
  }
}
