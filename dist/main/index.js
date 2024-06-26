"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleType = exports.PermissionObject = exports.Permission = exports.VersionWarningType = exports.MaterialsWorkpieceType = exports.PositionType = exports.EmailType = exports.ApplicationErrorCode = void 0;
var ApplicationErrorCode;
(function (ApplicationErrorCode) {
    ApplicationErrorCode[ApplicationErrorCode["BadRequest"] = 1000] = "BadRequest";
    ApplicationErrorCode[ApplicationErrorCode["EntityIsInUse"] = 1001] = "EntityIsInUse";
    ApplicationErrorCode[ApplicationErrorCode["Unauthorized"] = 1002] = "Unauthorized";
    ApplicationErrorCode[ApplicationErrorCode["Conflict"] = 1003] = "Conflict";
    ApplicationErrorCode[ApplicationErrorCode["InternalServerError"] = 1004] = "InternalServerError";
    ApplicationErrorCode[ApplicationErrorCode["OrderScheduled"] = 1007] = "OrderScheduled";
    ApplicationErrorCode[ApplicationErrorCode["OrderHasNotCompletedScheduleItems"] = 1008] = "OrderHasNotCompletedScheduleItems";
    ApplicationErrorCode[ApplicationErrorCode["OperationCanNotBeFixed"] = 1009] = "OperationCanNotBeFixed";
    ApplicationErrorCode[ApplicationErrorCode["OperationCanNotBeUnfixed"] = 1010] = "OperationCanNotBeUnfixed";
    ApplicationErrorCode[ApplicationErrorCode["OperationOverlap"] = 1011] = "OperationOverlap";
    ApplicationErrorCode[ApplicationErrorCode["ViolationOfScheduleRequirements"] = 1012] = "ViolationOfScheduleRequirements";
    ApplicationErrorCode[ApplicationErrorCode["MaxLoginAttemptsReached"] = 1013] = "MaxLoginAttemptsReached";
    ApplicationErrorCode[ApplicationErrorCode["EntityNotFound"] = 1014] = "EntityNotFound";
    ApplicationErrorCode[ApplicationErrorCode["MaxResetAttemptsReached"] = 1015] = "MaxResetAttemptsReached";
    ApplicationErrorCode[ApplicationErrorCode["CanNotDeleteEntity"] = 1016] = "CanNotDeleteEntity";
    ApplicationErrorCode[ApplicationErrorCode["DuplicateEntity"] = 1017] = "DuplicateEntity";
    ApplicationErrorCode[ApplicationErrorCode["CanNotEditEntity"] = 1018] = "CanNotEditEntity";
})(ApplicationErrorCode = exports.ApplicationErrorCode || (exports.ApplicationErrorCode = {}));
var EmailType;
(function (EmailType) {
    EmailType[EmailType["None"] = 0] = "None";
    EmailType[EmailType["MaterialProvision"] = 1] = "MaterialProvision";
    EmailType[EmailType["StampingProvision"] = 2] = "StampingProvision";
    EmailType[EmailType["MetalProvision"] = 3] = "MetalProvision";
    EmailType[EmailType["CuttingCompleted"] = 4] = "CuttingCompleted";
    EmailType[EmailType["HeatTreatmentCompleted"] = 5] = "HeatTreatmentCompleted";
    EmailType[EmailType["OperationCompleted"] = 6] = "OperationCompleted";
    EmailType[EmailType["ExternalCooperationCompleted"] = 7] = "ExternalCooperationCompleted";
    EmailType[EmailType["ReadyForShipment"] = 8] = "ReadyForShipment";
    EmailType[EmailType["SetPassword"] = 9] = "SetPassword";
    EmailType[EmailType["ResetPassword"] = 10] = "ResetPassword";
})(EmailType = exports.EmailType || (exports.EmailType = {}));
var PositionType;
(function (PositionType) {
    PositionType[PositionType["Purchase"] = 1] = "Purchase";
    PositionType[PositionType["Production"] = 2] = "Production";
})(PositionType = exports.PositionType || (exports.PositionType = {}));
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
    PermissionObject[PermissionObject["Schedule"] = 2] = "Schedule";
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
    PermissionObject[PermissionObject["OrderFunctionMarkShipped"] = 202] = "OrderFunctionMarkShipped";
    PermissionObject[PermissionObject["ScheduleCreateFromQueue"] = 300] = "ScheduleCreateFromQueue";
    PermissionObject[PermissionObject["ScheduleCreateManually"] = 301] = "ScheduleCreateManually";
    PermissionObject[PermissionObject["ScheduleFunctionPosition"] = 302] = "ScheduleFunctionPosition";
    PermissionObject[PermissionObject["ScheduleFunctionDuration"] = 303] = "ScheduleFunctionDuration";
    PermissionObject[PermissionObject["ScheduleFunctionMarkCompleted"] = 304] = "ScheduleFunctionMarkCompleted";
    PermissionObject[PermissionObject["ScheduleFunctionSplit"] = 305] = "ScheduleFunctionSplit";
    PermissionObject[PermissionObject["ScheduleFunctionPinUnpin"] = 306] = "ScheduleFunctionPinUnpin";
})(PermissionObject = exports.PermissionObject || (exports.PermissionObject = {}));
var ScheduleType;
(function (ScheduleType) {
    ScheduleType[ScheduleType["Operation"] = 1] = "Operation";
    ScheduleType[ScheduleType["Adjustment"] = 2] = "Adjustment";
    ScheduleType[ScheduleType["Downtime"] = 3] = "Downtime";
    ScheduleType[ScheduleType["FreeTime"] = 4] = "FreeTime";
})(ScheduleType = exports.ScheduleType || (exports.ScheduleType = {}));
