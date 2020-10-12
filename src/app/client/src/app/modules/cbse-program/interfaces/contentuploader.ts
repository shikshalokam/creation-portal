import { ISessionContext } from './index';


export interface IContentUploadComponentInput {
  config?: any;
  sessionContext?: ISessionContext;
  telemetryPageId?: string;
  unitIdentifier?: string;
  selectedSharedContext?: any;
  contentId?: string;
  templateDetails?: any;
  programContext?: any;
  action?: string;
  sourcingStatus?: string;
  originCollectionData?: any;
  content?: any;
}
