/** 
 * Consigo ter acesso a módulos que não seja React
 * ou seja, ter acesso/controle sobre elementos tsx 
 * sendo manipulados de um arquivo ts
 */

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();