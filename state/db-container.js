import { Container } from 'unstated';

/**
 * This state container provides global access to the db instance
 */

class DBContainer extends Container {
  state = {
    db: undefined,
    dbConnected: false,
  };

  connectDB = db => {
    this.setState({
      db,
      dbConnected: true,
    });
  };
}

export default DBContainer;
