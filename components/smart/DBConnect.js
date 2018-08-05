import { PureComponent } from 'react';
import lf from 'lovefield';
import PropTypes from 'prop-types';

import Indicator from '../dumb/Indicator';

class DBConnect extends PureComponent {
  static propTypes = {
    connect: PropTypes.func.isRequired,
    connected: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.getdbConnection();
  }

  buildSchema = version => {
    const schemaBuilder = lf.schema.create('banker', version);

    /**
     * Creating DB tables here
     */
    schemaBuilder
      .createTable('Stash')
      .addColumn('StashId', lf.Type.STRING)
      .addColumn('StashName', lf.Type.STRING)
      .addColumn('Date', lf.Type.DATE_TIME)
      .addPrimaryKey(['StashId']);

    return schemaBuilder;
  };

  getdbConnection = () => {
    /**
     * TODO:
     * - implement a db version upgrade here
     */

    const version = 1;

    const dbSchema = this.buildSchema(version);

    /**
     * connecting to the IndexedDB asynchronously and
     * then putting it on the DBContainer State for global access
     */
    dbSchema
      .connect({
        storeType: lf.schema.DataStoreType.INDEXED_DB,
      })
      .then(db => {
        this.props.connect(db);
      });
  };

  render() {
    /**
     * TODO:
     * - implement a better DB connection indicator here
     */
    return <Indicator flag={this.props.connected} />;
  }
}

export default DBConnect;
