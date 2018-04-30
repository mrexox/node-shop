import Menu from '../components/Menu';
import { connect } from 'react-redux';

let MainMenu = connect(
    state => ({
        isSigned: state.login.status === 'signed',
    })
)(Menu);

export default MainMenu;
