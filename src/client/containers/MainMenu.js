import Menu from '../components/Menu';
import { connect } from 'react-redux';

let MainMenu = connect(
    state => ({
        isSigned: state.auth.status === 'signed',
    })
)(Menu);

export default MainMenu;
