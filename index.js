#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const log = console.log;
const { 
	lookForJargon,
	listOfJargons
} = require('./looker');

program
	.version('0.1.0')
	.description('CLI Tool for jargon.ist');

program
	.command('look <jargon>')
	.alias('l')
	.description('Jargon to be looking for')
	.action(jargon => {
		lookForJargon(jargon).then(({title, body, codeBlock, status}) => {
			if(status == 404) {
				log(chalk.red(`${jargon} is not found!`));
				return;
			}
			log(chalk.blue(title.toUpperCase()));
			log(chalk.green(body.trim()));
			
			if(codeBlock) {
				log();
				log(chalk.bgRed('Code Block'));
				log(chalk.red(codeBlock.trim()));
			}
		});
	});

program
	.command('list')
	.alias('li')
	.description('List of jargons')
	.action(() => {
		listOfJargons().then(jargons => {
			jargons.forEach(j => log(chalk.blue(j)));
		});
	});
	
program.parse(process.argv);