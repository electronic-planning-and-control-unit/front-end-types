"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleType = exports.MaterialsWorkpieceType = exports.OrderStatus = exports.ApplicationErrorCode = void 0;
var ApplicationErrorCode;
(function (ApplicationErrorCode) {
    ApplicationErrorCode[ApplicationErrorCode["BadRequest"] = 1000] = "BadRequest";
    ApplicationErrorCode[ApplicationErrorCode["Unauthorized"] = 1002] = "Unauthorized";
    ApplicationErrorCode[ApplicationErrorCode["Forbidden"] = 1003] = "Forbidden";
    ApplicationErrorCode[ApplicationErrorCode["InternalServerError"] = 1004] = "InternalServerError";
    ApplicationErrorCode[ApplicationErrorCode["UnprocessableEntity"] = 1005] = "UnprocessableEntity";
    ApplicationErrorCode[ApplicationErrorCode["UserNotRegistered"] = 1006] = "UserNotRegistered";
})(ApplicationErrorCode = exports.ApplicationErrorCode || (exports.ApplicationErrorCode = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["NotPlanned"] = 1] = "NotPlanned";
    OrderStatus[OrderStatus["Planned"] = 2] = "Planned";
    OrderStatus[OrderStatus["Completed"] = 3] = "Completed";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var MaterialsWorkpieceType;
(function (MaterialsWorkpieceType) {
    MaterialsWorkpieceType[MaterialsWorkpieceType["Rolling"] = 1] = "Rolling";
    MaterialsWorkpieceType[MaterialsWorkpieceType["Stamping"] = 2] = "Stamping";
})(MaterialsWorkpieceType = exports.MaterialsWorkpieceType || (exports.MaterialsWorkpieceType = {}));
var ScheduleType;
(function (ScheduleType) {
    ScheduleType[ScheduleType["Operation"] = 1] = "Operation";
    ScheduleType[ScheduleType["Adjustment"] = 2] = "Adjustment";
    ScheduleType[ScheduleType["Downtime"] = 3] = "Downtime";
    ScheduleType[ScheduleType["FreeTime"] = 4] = "FreeTime";
})(ScheduleType = exports.ScheduleType || (exports.ScheduleType = {}));
