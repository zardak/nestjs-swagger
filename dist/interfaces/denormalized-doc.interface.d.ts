import { VersionValue } from '@nestjs/common/interfaces';
import { OpenAPIObject, OperationObject, ResponsesObject } from './open-api-spec.interface';
export interface DenormalizedDoc extends Partial<OpenAPIObject> {
    root?: {
        method: string;
        path: string;
        version?: VersionValue;
    } & OperationObject;
    responses?: ResponsesObject;
}
