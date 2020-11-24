export * from './box.service';
import { BoxService } from './box.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [BoxService, DefaultService, UserService];
