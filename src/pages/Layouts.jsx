
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layouts = () => {
    return (
        <>
            <Header />
            <div className='wrapper' style={{ padding: '20px 30px' }}>
                <Outlet />
            </div>
            <footer></footer>
        </>

    )
}

export default Layouts