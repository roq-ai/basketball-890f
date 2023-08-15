import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  status: string;
  referee_id?: string;
  team_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  team?: TeamInterface;
  _count?: {};
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  referee_id?: string;
  team_id?: string;
}
