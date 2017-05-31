import React from 'react';
import styles from '../dashboard.css';
import Table from 'react-toolbox/lib/table';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <div>
          <h1>Thursday <spam> 27 April</spam></h1> 
        </div>
        <div>
        <table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Tarea</th>
                <th>Tiempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MAN-666</td>
                <td>5h</td>
              </tr>
              <tr>
                <td>2</td>
                <td>MAN-113</td>
                <td>3h</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
