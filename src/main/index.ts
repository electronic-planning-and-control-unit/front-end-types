export interface IApplicationError {
  code: ApplicationErrorCode;
  message?: string;
}

export enum ApplicationErrorCode {
  BadRequest = 1000,
  EntityIsInUse = 1001,
  Unauthorized = 1002,
  Conflict = 1003,
  InternalServerError = 1004,
  OrderScheduled = 1007,
  OrderHasNotCompletedScheduleItems = 1008,
  OperationCanNotBeFixed = 1009,
  OperationCanNotBeUnfixed = 1010,
  OperationOverlap = 1011,
  ViolationOfScheduleRequirements = 1012,
  MaxLoginAttemptsReached = 1013,
  EntityNotFound = 1014,
  MaxResetAttemptsReached = 1015,
  CanNotDeleteEntity = 1016,
  DuplicateEntity = 1017,
  CanNotEditEntity = 1018,
}

export interface ISecurityTokens {
  accessToken?: string;
  refreshToken?: string;
}

export interface ILoginRequest {
  login?: string;
  password?: string;
}

export interface ISetPasswordRequest {
  newPassword: string;
  token: string;
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

export enum EmailType {
  None = 0,
  MaterialProvision = 1,
  StampingProvision = 2,
  MetalProvision = 3,
  CuttingCompleted = 4,
  HeatTreatmentCompleted = 5,
  OperationCompleted = 6,
  ExternalCooperationCompleted = 7,
  ReadyForShipment = 8,
  SetPassword = 9,
  ResetPassword = 10,
}

export interface IGetOrderBugsResponse {
  /** @format int64 */
  id: number;
  completed: boolean;
  orderOrderNumber?: string;
  orderDetailsBlueprint?: string;

  /** @format date-time */
  modifiedAt?: string;

  /** @format date-time */
  releasedToWarehouseAt?: string;

  /** @format date-time */
  productionReleasedAt?: string;

  /** @format date-time */
  heatTreatmentShippedFromWarehouseAt?: string;

  /** @format date-time */
  workStartPoint?: string;
}

export type IOrder = IOrderInfoDto & {
  id: number;
  createdAt: string;
  modifiedAt: string;
  scheduled: boolean;
  scheduleCompleted: boolean;
  workStartPoint?: string;
};

export interface IOrderInfoDto {
  completed: boolean;
  shipped: boolean;
  queued: boolean;
  positionType?: PositionType;

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
  techElaborationBlueprintsAvailable: boolean;
  materialsMetalGrade?: string;
  materialsWorkpieceType?: MaterialsWorkpieceType;
  manualMaterialsWorkpieceType?: string;
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

export enum PositionType {
  Purchase = 1,
  Production = 2,
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
  scheduled: boolean;
  scheduleCompleted: boolean;
  workStartPoint?: string;
  changedColumns?: string[];
  modifiedBy?: string;
  createdAt: string;
  createdById: number;
  versionWarningType: VersionWarningType;
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
  OrderFunctionMarkShipped = 202,
  ScheduleCreateFromQueue = 300,
  ScheduleCreateManually = 301,
  ScheduleFunctionPosition = 302,
  ScheduleFunctionDuration = 303,
  ScheduleFunctionMarkCompleted = 304,
  ScheduleFunctionSplit = 305,
  ScheduleFunctionPinUnpin = 306,
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
  name: string;
  permissions?: IRolePermission[];
}

export interface IGetScheduleResponse {
  schedule: IScheduleItem[];
  processingCenters: IProcessingCenter[];
}

export type IScheduleItem = IScheduleItemInfoDto & {
  id: number;
  createdAt: string;
  modifiedAt: string;
  processingCenter?: string;
  materialsSuppliedOverdue: boolean;
  preparationControlProgramOverdue: boolean;
  orderShipmentOverdue: boolean;
};

export interface IScheduleItemInfoDto {
  /** @format int64 */
  orderId?: number;
  completed: boolean;
  isFixed: boolean;
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

  /** @format date-time */
  lastRecordEnd: string;
}

export interface ICreateScheduleItemResponse {
  /** @format int64 */
  id: number;
}

export type ICreateScheduleItemRequest = IScheduleItemInfoDto & {
  id?: number;
  newProcessingCenter?: IProcessingCenter;
};

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

export interface ICreateScheduleItemFromQueueResponse {
  /** @format int64 */
  id: number;
}

export interface ICreateScheduleItemFromQueueRequest {
  /** @format int64 */
  id: number;

  /** @format date-time */
  operationDate: string;
  processingCenter?: IProcessingCenter;
}

export interface ISplitScheduleItemResponse {
  /** @format int64 */
  id: number;
}

export interface ISplitScheduleItemRequest {
  /** @format int64 */
  id: number;
  duration: number;
  newProcessingCenter?: IProcessingCenter;
}

export interface IUser {
  /** @format int64 */
  id: number;
  publicId?: string;
  email: string;
  firstName: string;
  lastName: string;
  savedFilters?: string;
  active: boolean;
  permissions?: Record<string, Permission>;
}

export interface IUserListItem {
  /** @format int64 */
  id: number;
  publicId?: string;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
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
  publicId?: string;
  firstName: string;
  email: string;
  lastName: string;
  roleIds?: number[];
  active: boolean;
}

export interface ICreateUserRequest {
  firstName: string;
  lastName: string;
  publicId?: string;
  email: string;
  roleIds?: number[];
}
