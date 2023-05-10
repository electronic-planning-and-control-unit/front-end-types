export interface IApplicationError {
    message: string;
    code: ApplicationErrorCode;
}
export declare enum ApplicationErrorCode {
    BadRequest = 1000,
    Unauthorized = 1002,
    Forbidden = 1003,
    InternalServerError = 1004,
    UnprocessableEntity = 1005,
    DuplicateNickname = 1006,
    DuplicatePhoneNumber = 1007,
    InvalidVerificationCode = 1008,
    PhoneNumberNotConfirmed = 1009,
    UserNotRegistered = 1010,
    NicknameAlreadyTaken = 1011,
    UserBlockedByInterlocutor = 1012,
    ChatNotExists = 1013,
    GoogleAuthEmailNotVerified = 1014,
    GoogleAuthIdTokenInvalid = 1015,
    GoogleAuthDisabled = 1016,
    DuplicateEmailAddress = 1017,
    LoginByPhoneNumberDisabled = 1018
}
export interface IOrder {
    /** @format int64 */
    id: number;
    /** @format date-time */
    createdAt: string;
    orderNeedsAttention: boolean;
    orderOrderNumber: string;
    /** @format date-time */
    orderShipmentDate: string;
    orderDetailsCustomer: string;
    orderDetailsStage: string;
    orderDetailsProduction: string;
    orderDetailsBlueprint: string;
    orderDetailsStart: number;
    orderDetailsRelease: number;
    /** @format double */
    techElaborationFineFinishingNorm: number;
    techElaborationProcessingCenterType: string;
    techElaborationExternalCooperation: boolean;
    techElaborationHeatTreatment: boolean;
    techElaborationStellite: boolean;
    techElaborationSpecialContainer: boolean;
    materialsMetalGrade: string;
    materialsWorkpieceType: MaterialsWorkpieceType;
    materialsNomenclature: string;
    materialsCrossSection: string;
    materialsWeight: number;
    materialsQuantity: number;
    materialsSupplied: boolean;
    /** @format date-time */
    materialsSuppliedAt?: string;
    materialsSpecialContainerSupplied: boolean;
    /** @format date-time */
    materialsSpecialContainerSuppliedAt?: string;
    materialsStelliteSupplied: boolean;
    /** @format date-time */
    materialsStelliteSuppliedAt?: string;
    preparationEquipmentCompleted: boolean;
    /** @format date-time */
    preparationEquipmentCompletedAt?: string;
    preparationToolsReady: boolean;
    /** @format date-time */
    preparationToolsReadyAt?: string;
    preparationControlProgram: boolean;
    /** @format date-time */
    preparationControlProgramDate?: string;
    cuttingWorkStarted: boolean;
    /** @format date-time */
    cuttingWorkStartedAt?: string;
    cuttingCompleted: boolean;
    /** @format date-time */
    cuttingCompletedAt?: string;
    heatTreatmentShippedFromWarehouse: boolean;
    /** @format date-time */
    heatTreatmentShippedFromWarehouseAt?: string;
    heatTreatmentReprocessor: string;
    heatTreatmentReleasedFromWarehouse: boolean;
    /** @format date-time */
    heatTreatmentReleasedFromWarehouseAt?: string;
    productionReleased: boolean;
    /** @format date-time */
    productionReleasedAt?: string;
    externalCooperationShippedFromWarehouse: boolean;
    /** @format date-time */
    externalCooperationShippedFromWarehouseAt?: string;
    externalCooperationReprocessor: string;
    externalCooperationArrivedIntoWarehouse: boolean;
    /** @format date-time */
    externalCooperationArrivedIntoWarehouseAt?: string;
    releasedToWarehouse: boolean;
    /** @format date-time */
    releasedToWarehouseAt?: string;
    releaseToWarehouseComment: string;
    releaseToWarehouseStatus: ReleaseToWarehouseStatus;
}
export declare enum MaterialsWorkpieceType {
    Rolling = 1,
    Stamping = 2
}
export declare enum ReleaseToWarehouseStatus {
    NotPlanned = 1,
    Planned = 2,
    Completed = 3
}
export declare type ISearchOrdersRequest = object;
