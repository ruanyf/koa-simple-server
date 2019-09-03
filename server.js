#!/usr/bin/env node
'use strict';

const koa = require('koa');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const path = require('path');
const serve = require('koa-static');

const PORT = 3000;

const app = new koa();

const log = async function (ctx, next) {
  var body = '\n\n';
  body += '\n\n';
  body += JSON.stringify(ctx.request, null, 2);

  if (ctx.request.method !== 'GET') {
    body += '\n\n';
    body += '## Body';
    body +=  '\n\n';
    body += JSON.stringify(ctx.request.body);

    // console.log('Body: ', this.request.body);
  }

  console.log(body);
  await next();
  // this.body = body;
}

const main = (ctx) => {
  ctx.body = '';
}

app.use(logger());
app.use(koaBody({formidable:{uploadDir: __dirname}}));
app.use(log);
app.use(serve('public'));
app.use(main);

app.listen(PORT, () => {
  console.log(`listening Port ${PORT}...\n`);
});
