"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleType = exports.PermissionObject = exports.Permission = exports.VersionWarningType = exports.MaterialsWorkpieceType = exports.ApplicationErrorCode = void 0;
var ApplicationErrorCode;
(function (ApplicationErrorCode) {
    ApplicationErrorCode[ApplicationErrorCode["BadRequest"] = 1000] = "BadRequest";
    ApplicationErrorCode[ApplicationErrorCode["Unauthorized"] = 1002] = "Unauthorized";
    ApplicationErrorCode[ApplicationErrorCode["InternalServerError"] = 1004] = "InternalServerError";
    ApplicationErrorCode[ApplicationErrorCode["OrderScheduled"] = 1007] = "OrderScheduled";
    ApplicationErrorCode[ApplicationErrorCode["OrderHasNotCompletedScheduleItems"] = 1008] = "OrderHasNotCompletedScheduleItems";
})(ApplicationErrorCode = exports.ApplicationErrorCode || (exports.ApplicationErrorCode = {}));
var MaterialsWorkpieceType;
(function (MaterialsWorkpieceType) {
    MaterialsWorkpieceType[MaterialsWorkpieceType["Rolling"] = 1] = "Rolling";
    MaterialsWorkpieceType[MaterialsWorkpieceType["Stamping"] = 2] = "Stamping";
})(MaterialsWorkpieceType = exports.MaterialsWorkpieceType || (exports.MaterialsWorkpieceType = {}));
var VersionWarningType;
(function (VersionWarningType) {
    VersionWarningType[VersionWarningType["UpdateOrder"] = 1] = "UpdateOrder";
    VersionWarningType[VersionWarningType["RescheduleOrder"] = 2] = "RescheduleOrder";
})(VersionWarningType = exports.VersionWarningType || (exports.VersionWarningType = {}));
var Permission;
(function (Permission) {
    Permission[Permission["None"] = 0] = "None";
    Permission[Permission["Read"] = 1] = "Read";
    Permission[Permission["Write"] = 2] = "Write";
    Permission[Permission["ReadWrite"] = 3] = "ReadWrite";
    Permission[Permission["Create"] = 4] = "Create";
    Permission[Permission["Remove"] = 8] = "Remove";
    Permission[Permission["Execute"] = 16] = "Execute";
    Permission[Permission["Full"] = 31] = "Full";
    Permission[Permission["Administrative"] = 32] = "Administrative";
    Permission[Permission["FullAdministrative"] = 63] = "FullAdministrative";
})(Permission = exports.Permission || (exports.Permission = {}));
var PermissionObject;
(function (PermissionObject) {
    PermissionObject[PermissionObject["None"] = 0] = "None";
    PermissionObject[PermissionObject["Orders"] = 1] = "Orders";
    PermissionObject[PermissionObject["ISchedule"] = 2] = "ISchedule";
    PermissionObject[PermissionObject["History"] = 3] = "History";
    PermissionObject[PermissionObject["Users"] = 4] = "Users";
    PermissionObject[PermissionObject["Roles"] = 5] = "Roles";
    PermissionObject[PermissionObject["OrdersBase"] = 100] = "OrdersBase";
    PermissionObject[PermissionObject["OrdersDetails"] = 110] = "OrdersDetails";
    PermissionObject[PermissionObject["OrdersTechElaboration"] = 120] = "OrdersTechElaboration";
    PermissionObject[PermissionObject["OrdersMaterials"] = 130] = "OrdersMaterials";
    PermissionObject[PermissionObject["OrdersPreparationEquipment"] = 140] = "OrdersPreparationEquipment";
    PermissionObject[PermissionObject["OrdersProduction"] = 150] = "OrdersProduction";
    PermissionObject[PermissionObject["OrdersProductionCutting"] = 151] = "OrdersProductionCutting";
    PermissionObject[PermissionObject["OrdersProductionHeatTreatment"] = 152] = "OrdersProductionHeatTreatment";
    PermissionObject[PermissionObject["OrdersProductionProduction"] = 153] = "OrdersProductionProduction";
    PermissionObject[PermissionObject["OrdersProductionExternalCooperation"] = 154] = "OrdersProductionExternalCooperation";
    PermissionObject[PermissionObject["OrdersComments"] = 160] = "OrdersComments";
    PermissionObject[PermissionObject["OrderFunctionAddToTimeline"] = 200] = "OrderFunctionAddToTimeline";
    PermissionObject[PermissionObject["OrderFunctionMarkCompleted"] = 201] = "OrderFunctionMarkCompleted";
    PermissionObject[PermissionObject["ScheduleCreateFromQueue"] = 300] = "ScheduleCreateFromQueue";
    PermissionObject[PermissionObject["ScheduleCreateManually"] = 301] = "ScheduleCreateManually";
    PermissionObject[PermissionObject["ScheduleFunctionPosition"] = 302] = "ScheduleFunctionPosition";
    PermissionObject[PermissionObject["ScheduleFunctionDuration"] = 303] = "ScheduleFunctionDuration";
    PermissionObject[PermissionObject["ScheduleFunctionMarkCompleted"] = 304] = "ScheduleFunctionMarkCompleted";
    PermissionObject[PermissionObject["ScheduleFunctionSplit"] = 305] = "ScheduleFunctionSplit";
})(PermissionObject = exports.PermissionObject || (exports.PermissionObject = {}));
var ScheduleType;
(function (ScheduleType) {
    ScheduleType[ScheduleType["Operation"] = 1] = "Operation";
    ScheduleType[ScheduleType["Adjustment"] = 2] = "Adjustment";
    ScheduleType[ScheduleType["Downtime"] = 3] = "Downtime";
    ScheduleType[ScheduleType["FreeTime"] = 4] = "FreeTime";
})(ScheduleType = exports.ScheduleType || (exports.ScheduleType = {}));
