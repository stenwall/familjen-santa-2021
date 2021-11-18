import type { NextPage } from 'next';

const Present: NextPage = () => {
  return (
    <main className="main">
      <h3>Hover the box</h3>
      <div className="present-wrapper">
        {/* <img className="img" src="https://via.placeholder.com/150" /> */}
        <div className="box">
          <div className="box-wrapper">
            <img className="img" src="https://via.placeholder.com/150" />
            <div className="box-body">
              {/* <img className="img" src="https://via.placeholder.com/150" /> */}
              <div className="box-lid">
                <div className="box-bowtie"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="img" src="https://via.placeholder.com/150" /> */}
      </div>
    </main>
  );
};

export default Present;
