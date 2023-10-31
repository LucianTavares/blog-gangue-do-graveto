import PetUser from "../pet-user.entity"

describe('Pet User Unit Tests', () => {

  describe('constructor', () => {

    test('should create a Pet User with minimal information', () => {

      const pet_user = new PetUser({
        name: 'Lua',
        race: 'Labrador',
        user_id: '1'
      })
      expect(pet_user.pet_user_id).toBeUndefined()
      expect(pet_user.name).toBe('Lua')
      expect(pet_user.race).toBe('Labrador')
      expect(pet_user.description).toBeNull()
      expect(pet_user.picture).toBeNull()
      expect(pet_user.is_active).toBeTruthy()
      expect(pet_user.created_at).toBeInstanceOf(Date)
    })

    test('should create a Pet User with all informations', () => {

      const created_at = new Date();
      const pet_user = new PetUser({
        name: 'Lua',
        race: 'Labrador',
        description: 'Brincalhona',
        is_active: true,
        created_at,
        user_id: '1'
      });

      expect(pet_user.pet_user_id).toBeUndefined()
      expect(pet_user.name).toBe('Lua')
      expect(pet_user.race).toBe('Labrador')
      expect(pet_user.description).toBe('Brincalhona')
      expect(pet_user.is_active).toBeTruthy()
      expect(pet_user.created_at).toBe(created_at)
    })
  })
})