'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers
	.filter((item) => (item.length > 0 && item.trim() !== ''))
	.map((item) => {
		item = item.toLowerCase().trim();
		item = item.charAt(0).toUpperCase() + item.slice(1);
		return item;
	});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own = 0, ...everyCash) => {
	let total = own;
	everyCash.forEach(item => total += item);
	return total;
};

const lesson = calcCash( ...data.cash);

const makeBusiness = (director, teacher = 'Максим', allModule, gang, course) => {
    const sumTech = [...data.react,...data.add, 'и другие'];
    console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`);
    console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
    console.log(`Технологии которые мы изучим: `);
    console.log(...sumTech);
}

makeBusiness(...['Артем', , lesson, command, nameCourse]);
