
  const jobList = [
    {
      id: 0,
      name: 'Test0 (2019)',
      cmd: './pan.sh',
      working_dir: '/home/pentaho/pdi-ce-8.2.0.0-342/data-integration',
      rep_name: 'dbRep_PDI_7',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2019'}
    },
    {
      id: 1,
      name: 'Test1 (2020-01)',
      cmd: './pan.sh',
      working_dir: '/home/pentaho/pdi-ce-8.2.0.0-342/data-integration',
      rep_name: 'dbRep_PDI_7',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2020',mese:'01'}
    },
    {
      id: 2,
      name: 'Test2 (2021-02-03)',
      cmd: './pan.sh',
      working_dir: '/home/pentaho/pdi-ce-8.2.0.0-342/data-integration',
      rep_name: 'dbRep_PDI_7',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2021',mese:'02', giorno:'03'}
    }
  ];
  module.exports = jobList;