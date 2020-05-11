import * as React from 'react'
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import loadable from "./loadable";
import history from "./history";

const WrapContainer = loadable(() => import('../layout/index'));
const Login = loadable(() => import('../modules/login'));
const Dashboard = loadable(() => import('../modules/dashboard'));
const ECharts = loadable(() => import('../modules/echarts'));
const Error404 = loadable(() => import('../modules/errorPage/404'));


const routerList = [
    {
        path: '/404',
        exact: true,
        component: Error404,
        mate: {title: '找不到了'}
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        mate: {title: '后台管理-登录'}
    }, {
        path: '/',
        component: WrapContainer,
        exact: true,
        mate: {title: '后台管理-控制台'},
        children: [
            {
                path: '/dashboard',
                component: Dashboard
            }, {
                path: '/echarts',
                component: ECharts
            }
        ]
    }
]

const RouterView = () => (
    <Router history={history}>
        <Switch>
            {routerList.map(item => {
                return item.children
                    ?
                    <WrapContainer>
                        <Switch>
                            {item.children.map(childrenItem => <Route key={childrenItem.path} path={childrenItem.path} component={childrenItem.component} />)}
                        </Switch>
                    </WrapContainer>
                    :
                    <Route exact={item.exact} key={item.path} path={item.path} component={item.component}/>
            })}
        </Switch>
    </Router>
)

export default RouterView
