export interface IApplicationError {
  code: ApplicationErrorCode;
  message?: string;
}

export enum ApplicationErrorCode {
  BadRequest = 1000,
  Unauthorized = 1002,
  Forbidden = 1003,
  InternalServerError = 1004,
  UnprocessableEntity = 1005,
  UserNotRegistered = 1006,
}

export type IOrder = IOrderInfoDto & { id: number; createdAt: string; numberOfRowChanges: number; scheduled: boolean };

export interface IOrderInfoDto {
  completed?: boolean;

  /** @format date-time */
  releasedToWarehouseAt?: string;
  comment?: string;
  orderNeedsAttention?: boolean;
  orderOrderNumber?: string;

  /** @format date-time */
  orderShipmentDate?: string;
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
}

export enum MaterialsWorkpieceType {
  Rolling = 1,
  Stamping = 2,
}

export interface ICreateTopicResponse {
  /** @format int64 */
  id: number;
}

export type ICreateOrderRequest = IOrderInfoDto & object;

export type IUpdateOrderCommand = IOrderInfoDto & { id: number };

export type ISchedule = IScheduleItemInfoDto & { id: number; createdAt: string };

export interface IScheduleItemInfoDto {
  /** @format int64 */
  orderId?: number;
  scheduleType: ScheduleType;

  /** @format byte */
  duration: number;

  /** @format date-time */
  operationStartsAt: string;

  /** @format date-time */
  operationEndsAt: string;
  orderDetailsBlueprint?: string;
  orderOrderNumber?: string;

  /** @format double */
  techElaborationFineFinishingNorm?: number;
  orderDetailsCustomer?: string;

  /** @format date-time */
  orderShipmentDate?: string;

  /** @format date-time */
  materialsSuppliedAt?: string;

  /** @format date-time */
  preparationControlProgramReadyAt?: string;
  comment?: string;
}

export enum ScheduleType {
  Operation = 1,
  Adjustment = 2,
  Downtime = 3,
  FreeTime = 4,
}

export interface ICreateScheduleItemResponse {
  /** @format int64 */
  id: number;
}

export type ICreateScheduleItemRequest = IScheduleItemInfoDto & object;

export type IUpdateScheduleItemRequest = IScheduleItemInfoDto & { id: number };
