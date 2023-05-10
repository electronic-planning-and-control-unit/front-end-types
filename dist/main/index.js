"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseToWarehouseStatus = exports.MaterialsWorkpieceType = exports.ApplicationErrorCode = void 0;
var ApplicationErrorCode;
(function (ApplicationErrorCode) {
    ApplicationErrorCode[ApplicationErrorCode["BadRequest"] = 1000] = "BadRequest";
    ApplicationErrorCode[ApplicationErrorCode["Unauthorized"] = 1002] = "Unauthorized";
    ApplicationErrorCode[ApplicationErrorCode["Forbidden"] = 1003] = "Forbidden";
    ApplicationErrorCode[ApplicationErrorCode["InternalServerError"] = 1004] = "InternalServerError";
    ApplicationErrorCode[ApplicationErrorCode["UnprocessableEntity"] = 1005] = "UnprocessableEntity";
    ApplicationErrorCode[ApplicationErrorCode["DuplicateNickname"] = 1006] = "DuplicateNickname";
    ApplicationErrorCode[ApplicationErrorCode["DuplicatePhoneNumber"] = 1007] = "DuplicatePhoneNumber";
    ApplicationErrorCode[ApplicationErrorCode["InvalidVerificationCode"] = 1008] = "InvalidVerificationCode";
    ApplicationErrorCode[ApplicationErrorCode["PhoneNumberNotConfirmed"] = 1009] = "PhoneNumberNotConfirmed";
    ApplicationErrorCode[ApplicationErrorCode["UserNotRegistered"] = 1010] = "UserNotRegistered";
    ApplicationErrorCode[ApplicationErrorCode["NicknameAlreadyTaken"] = 1011] = "NicknameAlreadyTaken";
    ApplicationErrorCode[ApplicationErrorCode["UserBlockedByInterlocutor"] = 1012] = "UserBlockedByInterlocutor";
    ApplicationErrorCode[ApplicationErrorCode["ChatNotExists"] = 1013] = "ChatNotExists";
    ApplicationErrorCode[ApplicationErrorCode["GoogleAuthEmailNotVerified"] = 1014] = "GoogleAuthEmailNotVerified";
    ApplicationErrorCode[ApplicationErrorCode["GoogleAuthIdTokenInvalid"] = 1015] = "GoogleAuthIdTokenInvalid";
    ApplicationErrorCode[ApplicationErrorCode["GoogleAuthDisabled"] = 1016] = "GoogleAuthDisabled";
    ApplicationErrorCode[ApplicationErrorCode["DuplicateEmailAddress"] = 1017] = "DuplicateEmailAddress";
    ApplicationErrorCode[ApplicationErrorCode["LoginByPhoneNumberDisabled"] = 1018] = "LoginByPhoneNumberDisabled";
})(ApplicationErrorCode = exports.ApplicationErrorCode || (exports.ApplicationErrorCode = {}));
var MaterialsWorkpieceType;
(function (MaterialsWorkpieceType) {
    MaterialsWorkpieceType[MaterialsWorkpieceType["Rolling"] = 1] = "Rolling";
    MaterialsWorkpieceType[MaterialsWorkpieceType["Stamping"] = 2] = "Stamping";
})(MaterialsWorkpieceType = exports.MaterialsWorkpieceType || (exports.MaterialsWorkpieceType = {}));
var ReleaseToWarehouseStatus;
(function (ReleaseToWarehouseStatus) {
    ReleaseToWarehouseStatus[ReleaseToWarehouseStatus["NotPlanned"] = 1] = "NotPlanned";
    ReleaseToWarehouseStatus[ReleaseToWarehouseStatus["Planned"] = 2] = "Planned";
    ReleaseToWarehouseStatus[ReleaseToWarehouseStatus["Completed"] = 3] = "Completed";
})(ReleaseToWarehouseStatus = exports.ReleaseToWarehouseStatus || (exports.ReleaseToWarehouseStatus = {}));
