import {observable, action} from 'mobx'

class AppState {
    @observable num = 1234

    @action
    changeNum = num => {
        console.log(num)

        this.num = num
    }
}

const appState = new AppState()

export default {appState}
