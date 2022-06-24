import useAuth from '../../../hooks/useAuth';

interface MainProps {
  title: string;
}

export default function Main(props: MainProps) {
  // delete soon
  // enable typings
  const auth: any = useAuth();

  const { title } = props;
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{title}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                <li className="breadcrumb-item active">Blank Page</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Title</h3>
          </div>
          <div className="card-body">
            Start creating your amazing application!
            {' '}
            <br />
            {auth ? 'ada | ' : 'gk ada | '}
            <br />
            {`data: ${JSON.stringify(auth)}`}
            <br />
            {`data: ${JSON.stringify(auth?.auth?.user)}`}
            <br />
            {`level: ${JSON.stringify(auth?.auth?.user?.level)}`}
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            Footer
          </div>
          {/* /.card-footer */}
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
  );
}
