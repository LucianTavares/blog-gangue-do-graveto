export type PetUserConstructorProps = {

  pet_user_id?: string;
  name: string;
  race: string;
  description?: string | null;
  picture?: string | null;
  is_active?: boolean;
  created_at?: Date;
  user_id: string;
}

export type PetUserCreateCommand = {
  name: string;
  race: string;
  description?: string | null;
  picture?: string | null;
  is_active?: boolean | true;
  user_id: string;
}

export default class PetUser {

  pet_user_id: string;
  name: string;
  race: string;
  description: string | null;
  picture: string | null;
  is_active: boolean;
  created_at: Date;
  user_id: string;

  constructor(props: PetUserConstructorProps) {
    this.pet_user_id = props.pet_user_id;
    this.name = props.name;
    this.race = props.race;
    this.description = props.description ?? null;
    this.picture = props.picture ?? null;
    this.is_active = props.is_active ?? true;
    this.created_at = props.created_at ?? new Date();
    this.user_id = props.user_id;
  }

  static create(props: PetUserCreateCommand): PetUser {
    return new PetUser(props);
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeDescription(description: string): void {
    this.description = description;
  }

  changePicture(picture: string): void {
    this.picture = picture;
  }

  activate() {
    this.is_active = true;
  }

  deactivate() {
    this.is_active = false;
  }

  toJSON() {
    return {
      pet_user_id: this.pet_user_id,
      name: this.name,
      race: this.race,
      description: this.description,
      picture: this.picture,
      is_active: this.is_active,
      created_at: this.created_at,
      user_id: this.user_id
    };
  }
}