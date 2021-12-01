function runByOrder(promises) {
	promises.reduce((pre, next) => {
        console.log(pre)
        console.log(pre instanceof Promise )
		const p = pre instanceof Promise ? pre : pre();
		return p.then(() => {
			return next();
		});
	});
}
const test1 = () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('test1 run');
			resolve();
		}, 1000);
	});
const test2 = () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('test2 run');
			resolve();
		}, 500);
	});
const test3 = () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('test3 run');
			resolve();
		}, 100);
	});
runByOrder([test1, test2, test3]);