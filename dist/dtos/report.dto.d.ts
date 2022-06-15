import { ReportType } from '../data';
export declare class CreateReportDto {
    amount: number;
    source: string;
}
export declare class UpdateReportDto {
    amount: number;
    source: string;
}
export declare class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
    transformCreatedAt(): Date;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
    constructor(partial: Partial<ReportResponseDto>);
}
