console.log('模块a初始化');
export let num = 100;
export function changeNum() {
  num = Date.now();
}
