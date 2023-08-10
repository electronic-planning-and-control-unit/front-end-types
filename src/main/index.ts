export interface IApplicationError {
  code: ApplicationErrorCode;
  message?: string;
}

export enum ApplicationErrorCode {
  BadRequest = 1000,
  Unauthorized = 1002,
  Conflict = 1003,
  InternalServerError = 1004,
  OrderScheduled = 1007,
  OrderHasNotCompletedScheduleItems = 1008,
}

export interface ISecurityTokens {
  accessToken?: string;
  refreshToken?: string;
}

export interface ILoginRequest {
  login?: string;
  password?: string;
}

export interface IResetPasswordRequest {
  email: string;
}

export interface IChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}

export type IOrder = IOrderInfoDto & {
  id: number;
  createdAt: string;
  numberOfRowChanges: number;
  scheduled: boolean;
  scheduleCompleted: boolean;
  workStartPoint?: string;
};

export interface IOrderInfoDto {
  completed: boolean;
  queued: boolean;

  /** @format date-time */
  releasedToWarehouseAt?: string;
  comment?: string;
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
  techElaborationProcessingCenterType?: string[];
  techElaborationExternalCooperation: boolean;
  techElaborationHeatTreatment: boolean;
  techElaborationStellite: boolean;
  techElaborationSpecialContainer: boolean;
  materialsMetalGrade?: string;
  materialsWorkpieceType?: MaterialsWorkpieceType;
  materialsNomenclature?: string;
  materialsCrossSection?: string;
  materialsWeight?: number;
  materialsLength?: number;
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
  preparationControlProgramReadyAt?: string;
  cuttingWorkStarted: boolean;

  /** @format date-time */
  cuttingWorkStartedAt?: string;
  cuttingCompleted: boolean;

  /** @format date-time */
  cuttingCompletedAt?: string;
  heatTreatmentShippedFromWarehouse: boolean;

  /** @format date-time */
  heatTreatmentShippedFromWarehouseAt?: string;
  heatTreatmentReprocessor?: string;
  heatTreatmentReleasedFromWarehouse: boolean;

  /** @format date-time */
  heatTreatmentReleasedFromWarehouseAt?: string;
  productionReleased: boolean;

  /** @format date-time */
  productionReleasedAt?: string;
  externalCooperationShippedFromWarehouse: boolean;

  /** @format date-time */
  externalCooperationShippedFromWarehouseAt?: string;
  externalCooperationReprocessor?: string;
  externalCooperationArrivedIntoWarehouse: boolean;

  /** @format date-time */
  externalCooperationArrivedIntoWarehouseAt?: string;
}

export enum MaterialsWorkpieceType {
  Rolling = 1,
  Stamping = 2,
}

export interface ICreateOrderResponse {
  /** @format int64 */
  id: number;
}

export type ICreateOrderRequest = IOrderInfoDto & object;

export interface IEditBulkOrderRequest {
  commands?: IUpdateOrderCommand[];
}

export type IUpdateOrderCommand = IOrderInfoDto & { id: number };

export type IOrderHistoryItem = IOrderInfoDto & {
  id: number;
  createdAt: string;
  createdById: number;
  scheduled: boolean;
  scheduleCompleted: boolean;
  workStartPoint?: string;
  versionWarningType: VersionWarningType;
  changedColumns?: string[];
  modifiedBy?: string;
};

export enum VersionWarningType {
  UpdateOrder = 1,
  RescheduleOrder = 2,
}

export interface IRole {
  /** @format int64 */
  id: number;

  /** @format date-time */
  createdAt: string;
  name?: string;
  permissions?: IRolePermission[];
}

export interface IRolePermission {
  /** @format int64 */
  id: number;
  permission: Permission;
  permissionObject: PermissionObject;
}

export enum Permission {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = 3,
  Create = 4,
  Remove = 8,
  Execute = 16,
  Full = 31,
  Administrative = 32,
  FullAdministrative = 63,
}

export enum PermissionObject {
  None = 0,
  Orders = 1,
  Schedule = 2,
  History = 3,
  Users = 4,
  Roles = 5,
  OrdersBase = 100,
  OrdersDetails = 110,
  OrdersTechElaboration = 120,
  OrdersMaterials = 130,
  OrdersPreparationEquipment = 140,
  OrdersProduction = 150,
  OrdersProductionCutting = 151,
  OrdersProductionHeatTreatment = 152,
  OrdersProductionProduction = 153,
  OrdersProductionExternalCooperation = 154,
  OrdersComments = 160,
  OrderFunctionAddToTimeline = 200,
  OrderFunctionMarkCompleted = 201,
  ScheduleCreateFromQueue = 300,
  ScheduleCreateManually = 301,
  ScheduleFunctionPosition = 302,
  ScheduleFunctionDuration = 303,
  ScheduleFunctionMarkCompleted = 304,
  ScheduleFunctionSplit = 305,
}

export interface ICreateRoleResponse {
  /** @format int64 */
  id: number;
}

export interface ICreateRoleRequest {
  name?: string;
}

export interface IUpdateRoleRequest {
  /** @format int64 */
  id: number;
  name?: string;
  permissions?: IRolePermission[];
}

export interface IGetScheduleResponse {
  schedule: IScheduleItem[];
  processingCenters: IProcessingCenter[];
}

export type IScheduleItem = IScheduleItemInfoDto & { id: number; createdAt: string; processingCenter?: string };

export interface IScheduleItemInfoDto {
  /** @format int64 */
  orderId?: number;
  completed: boolean;
  scheduleType: ScheduleType;
  duration: number;

  /** @format date-time */
  operationStartsAt: string;
  operationName?: string;
  orderDetailsBlueprint?: string;
  orderOrderNumber?: string;

  /** @format double */
  techElaborationFineFinishingNorm?: number;
  techElaborationProcessingCenterType?: string[];
  orderDetailsCustomer?: string;

  /** @format date-time */
  orderShipmentDate?: string;

  /** @format date-time */
  materialsSuppliedAt?: string;
  materialsSupplied: boolean;

  /** @format date-time */
  preparationControlProgramReadyAt?: string;
  preparationControlProgramReady: boolean;
  orderDetailsStage?: string;
  comment?: string;
}

export enum ScheduleType {
  Operation = 1,
  Adjustment = 2,
  Downtime = 3,
  FreeTime = 4,
}

export interface IProcessingCenter {
  /** @format int64 */
  id: number;
  name?: string;

  /** @format int64 */
  version: number;
}

export interface ICreateScheduleItemResponse {
  /** @format int64 */
  id: number;
}

export type ICreateScheduleItemRequest = IScheduleItemInfoDto & { id?: number; processingCenter?: IProcessingCenter };

export interface IDeleteScheduleItemRequest {
  /** @format int64 */
  id: number;
  processingCenter?: IProcessingCenter;
}

export type IUpdateScheduleItemRequest = IScheduleItemInfoDto & {
  id: number;
  oldProcessingCenter?: IProcessingCenter;
  newProcessingCenter?: IProcessingCenter;
};

export interface IUser {
  /** @format int64 */
  id: number;

  /** @format int64 */
  publicId: number;
  email: string;
  firstName: string;
  lastName?: string;
  savedFilters?: string;
  permissions?: Record<string, Permission>;
}

export interface IUserListItem {
  /** @format int64 */
  id: number;

  /** @format int64 */
  publicId: number;
  email: string;
  firstName: string;
  lastName?: string;
  roles?: IRole[];
}

export interface IUpdateMyProfileRequest {
  firstName?: string;
  lastName?: string;
  savedFilters?: string;
}

export interface IUpdateUserRequest {
  /** @format int64 */
  id: number;

  /** @format int64 */
  publicId: number;
  firstName?: string;
  lastName?: string;
  roleIds?: number[];
}
