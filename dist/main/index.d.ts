export interface IApplicationError {
    code: ApplicationErrorCode;
    message?: string;
}
export declare enum ApplicationErrorCode {
    BadRequest = 1000,
    Unauthorized = 1002,
    Forbidden = 1003,
    InternalServerError = 1004,
    UnprocessableEntity = 1005,
    UserNotRegistered = 1006
}
export declare type IOrder = IOrderInfoDto & {
    id: number;
    createdAt: string;
    numberOfRowChanges: number;
};
export interface IOrderInfoDto {
    orderNeedsAttention?: boolean;
    orderOrderNumber?: string;
    /** @format date-time */
    orderShipmentDate?: string;
    orderStatus?: OrderStatus;
    orderDetailsCustomer?: string;
    orderDetailsStage?: string;
    orderDetailsBlueprint?: string;
    orderDetailsStart?: number;
    orderDetailsRelease?: number;
    /** @format double */
    techElaborationFineFinishingNorm?: number;
    techElaborationProcessingCenterType?: string;
    techElaborationExternalCooperation?: boolean;
    techElaborationHeatTreatment?: boolean;
    techElaborationStellite?: boolean;
    techElaborationSpecialContainer?: boolean;
    materialsMetalGrade?: string;
    materialsWorkpieceType?: MaterialsWorkpieceType;
    materialsNomenclature?: string;
    materialsCrossSection?: string;
    materialsWeight?: number;
    materialsLength?: number;
    materialsSupplied?: boolean;
    /** @format date-time */
    materialsSuppliedAt?: string;
    materialsSpecialContainerSupplied?: boolean;
    /** @format date-time */
    materialsSpecialContainerSuppliedAt?: string;
    materialsStelliteSupplied?: boolean;
    /** @format date-time */
    materialsStelliteSuppliedAt?: string;
    preparationEquipmentCompleted?: boolean;
    /** @format date-time */
    preparationEquipmentCompletedAt?: string;
    preparationToolsReady?: boolean;
    /** @format date-time */
    preparationToolsReadyAt?: string;
    preparationControlProgram?: boolean;
    /** @format date-time */
    preparationControlProgramReadyAt?: string;
    cuttingWorkStarted?: boolean;
    /** @format date-time */
    cuttingWorkStartedAt?: string;
    cuttingCompleted?: boolean;
    /** @format date-time */
    cuttingCompletedAt?: string;
    heatTreatmentShippedFromWarehouse?: boolean;
    /** @format date-time */
    heatTreatmentShippedFromWarehouseAt?: string;
    heatTreatmentReprocessor?: string;
    heatTreatmentReleasedFromWarehouse?: boolean;
    /** @format date-time */
    heatTreatmentReleasedFromWarehouseAt?: string;
    productionReleased?: boolean;
    /** @format date-time */
    productionReleasedAt?: string;
    externalCooperationShippedFromWarehouse?: boolean;
    /** @format date-time */
    externalCooperationShippedFromWarehouseAt?: string;
    externalCooperationReprocessor?: string;
    externalCooperationArrivedIntoWarehouse?: boolean;
    /** @format date-time */
    externalCooperationArrivedIntoWarehouseAt?: string;
    /** @format date-time */
    releasedToWarehouseAt?: string;
    releaseToWarehouseComment?: string;
}
export declare enum OrderStatus {
    NotPlanned = 1,
    Planned = 2,
    Completed = 3
}
export declare enum MaterialsWorkpieceType {
    Rolling = 1,
    Stamping = 2
}
export interface ICreateTopicResponse {
    /** @format int64 */
    id: number;
}
export declare type ICreateOrderRequest = IOrderInfoDto & object;
export declare type IUpdateOrderCommand = IOrderInfoDto & {
    id: number;
};
