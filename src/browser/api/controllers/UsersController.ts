import UsersModel from '../database/models/UsersModel';


class UsersController {

  /**
   * List all users in database
   */
  public list = async () => {
    return await UsersModel.findAll({ raw: true });
  }
}

export default new UsersController();