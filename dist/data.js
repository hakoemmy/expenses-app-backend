"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.ReportType = void 0;
var ReportType;
(function (ReportType) {
    ReportType["INCOME"] = "income";
    ReportType["EXPENSE"] = "expense";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
exports.data = {
    report: [{
            id: 'uuid1',
            source: 'Salary',
            amount: 4000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'uuid2',
            source: 'Freelance',
            amount: 2000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'uuid3',
            source: 'Food',
            amount: 200,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
};
exports.data.report.push({
    id: 'uuid',
    source: 'Salary',
    amount: 100,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
});
//# sourceMappingURL=data.js.map