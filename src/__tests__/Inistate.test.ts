import { Inistate, InistateOptions } from '../index';

let config: Record<string, string> = {};
process.argv.forEach((cmd) => {
  if (cmd.startsWith('--') && cmd.indexOf('=') > -1) {
    let args = cmd.split('=');
    config[args[0].substring('--'.length)] = args[1];
  }
});

test('Inistate client construction', () => {
  let inistate = new Inistate({
    apiKey: config['apiKey'],
    workspace: config['workspace']
  })

  expect(inistate).not.toEqual(null);
});

test('Inistate client module', () => {
  let inistate = new Inistate({
    endpoint: config['endpoint'],
    apiKey: config['apiKey'],
    workspace: config['workspace']
  })

  let module = inistate.module('Inistate');
  expect(module).not.toEqual(null);
});

test('Inistate workspace load', async () => {
  let inistate = new Inistate({
    endpoint: config['endpoint'],
    apiKey: config['apiKey'],
    workspace: config['workspace']
  })

  let workspace = await inistate.request();
  expect(workspace).not.toEqual(null);
});

test('Inistate module load', async () => {
  let inistate = new Inistate({
    endpoint: config['endpoint'],
    apiKey: config['apiKey'],
    workspace: config['workspace']
  })

  let module = inistate.module('Issue');
  // let moduleLoaded = await module.request();

  // expect(moduleLoaded).not.toEqual(null);

});

test('Inistate module list', async () => {
  let inistate = new Inistate({
    endpoint: config['endpoint'],
    apiKey: config['apiKey'],
    workspace: config['workspace']
  })

  let module = inistate.module('Issue');
  let list = await module.list();
  console.log(list);
  expect(list).not.toEqual(null);

});



