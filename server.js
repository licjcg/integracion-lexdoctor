const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Firebird = require('node-firebird');
const app = express();

const options = {
  host: 'localhost',
  port: 3050,
  database: 'C:/LEX11E/DATOS/LEX11E.fdb',
  user: 'SYSDBA',
  password: 'masterkey',
  role: null,
  pageSize: 4096,
  charset: 'UTF8',
  sessionTimeZone: 'UTC'
};

app.use(cors());
app.use(bodyParser.json());

// Ruta para la tabla PROC
app.get('/api/proc', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM PROC', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        proc: row.PROC,
        grup: row.GRUP,
        tpro: row.TPRO,
        acto: row.ACTO,
        obse: row.OBSE,
        inic: row.INIC,
        fina: row.FINA,
        // Añadir los campos adicionales según sea necesario
      })));
      db.detach();
    });
  });
});

// Ruta para la tabla BJTX
app.get('/api/bjtx', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM BJTX', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        bjtx: row.BJTX,
        bjar: row.BJAR,
        ownr: row.OWNR,
        orde: row.ORDE,
        dscr: row.DSCR,
        voce: row.VOCE,
        rich: row.RICH,
        apro: row.APRO,
        text: row.TEXT,
        edit: row.EDIT,
      })));
      db.detach();
    });
  });
});

// Ruta para la tabla ABOG
app.get('/api/abog', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM ABOG', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        abog: row.ABOG,
        dscr: row.DSCR,
        aux1: row.AUX1,
        aux2: row.AUX2,
        aux3: row.AUX3,
        aux4: row.AUX4,
        aux5: row.AUX5,
        aux6: row.AUX6,
        aux7: row.AUX7,
        aux8: row.AUX8,
        miem: row.MIEM,
        edit: row.EDIT,
      })));
      db.detach();
    });
  });
});

// Ruta para la tabla ARB_LDTEXTOS
app.get('/api/arb_ldtextos', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM ARB_LDTEXTOS', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        arb_ldtextos: row.ARB_LDTEXTOS,
        ownr: row.OWNR,
        orde: row.ORDE,
        tipo: row.TIPO,
        dscr: row.DSCR,
        firs: row.FIRS,
        last: row.LAST,
        tkey: row.TKEY,
      })));
      db.detach();
    });
  });
});

// Ruta para la tabla BJAR
app.get('/api/bjar', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM BJAR', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        bjar: row.BJAR,
        ownr: row.OWNR,
        orde: row.ORDE,
        tipo: row.TIPO,
        fpub: row.FPUB,
        fcar: row.FCAR,
        dscr: row.DSCR,
        obse: row.OBSE,
        nvig: row.NVIG,
        txts: row.TXTS,
        edit: row.EDIT,
      })));
      db.detach();
    });
  });
});

// Ruta para la tabla CINT
app.get('/api/cint', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM CINT', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        cint: row.CINT,
        dscr: row.DSCR,
        edit: row.EDIT,
      })));
      db.detach();
    });
  });
});

// Ruta para la tabla CMPL
app.get('/api/cmpl', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM CMPL', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        cmpl: row.CMPL,
        lice: row.LICE,
        icon: row.ICON,
      })));
      db.detach();
    });
  });
});

// Ruta para la tabla COIM
app.get('/api/coim', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM COIM', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        coim: row.COIM,
        nomb: row.NOMB,
        dscr: row.DSCR,
        nume: row.NUME,
        miem: row.MIEM,
        text: row.TEXT,
        edit: row.EDIT,
      })));
      db.detach();
    });
  });
});

app.get('/api/como', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM COMO', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        como: row.COMO,
        tipo: row.TIPO,
        fech: row.FECH,
        comp: row.COMP,
        vend: row.VEND,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/cont', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM CONT', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        cont: row.CONT,
        proc: row.PROC,
        suje: row.SUJE,
        cuen: row.CUEN,
        grup: row.GRUP,
        fech: row.FECH,
        fcal: row.FCAL,
        tiem: row.TIEM,
        conc: row.CONC,
        esta: row.ESTA,
        fest: row.FEST,
        comp: row.COMP,
        mone: row.MONE,
        cla1: row.CLA1,
        cla2: row.CLA2,
        ocal: row.OCAL,
        mont: row.MONT,
        fech: row.FECH,
        tiem: row.TIEM,
        nom1: row.NOM1,
        nom2: row.NOM2,
        dire: row.DIRE,
        ciud: row.CIUD,
        cpos: row.CPOS,
        prov: row.PROV,
        tele: row.TELE,
        fax: row.FAX,
        emai: row.EMAI,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});      

app.get('/api/corr', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM CORR', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        corr: row.CORR,
        proc: row.PROC,
        miem: row.MIEM,
        como: row.COMO,
        de: row.DE,
        para: row.PARA,
        cc: row.CC,
        cco: row.CCO,
        asun: row.ASUN,
        come: row.COME,
        fech: row.FECH,
        hora: row.HORA,
        text: row.TEXT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/cuen', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM CUEN', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        cuen: row.CUEN,
        ownr: row.OWNR,
        orde: row.ORDE,
        dscr: row.DSCR,
        valh: row.VALH,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/dicc', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM DICC', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        dicc: row.DICC,
        pala: row.PALA,
        soni: row.SONI
      })));
      db.detach();
    });
  });
});

app.get('/api/doco', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM DOCO', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        doco: row.DOCO,
        dscr: row.DSCR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/esta', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM ESTA', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        esta: row.ESTA,
        proc: row.PROC,
        nume: row.NUME,
        test: row.TEST
      })));
      db.detach();
    });
  });
});

app.get('/api/even', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM EVEN', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        even: row.EVEN,
        ip: row.IP,
        ws: row.WS,
        miem: row.MIEM,
        fech: row.FECH,
        oper: row.OPER,
        tipo: row.TIPO,
        id: row.ID,
        deta: row.DETA
      })));
      db.detach();
    });
  });
});

app.get('/api/fact', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM FACT', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        fact: row.FACT,
        suje: row.SUJE,
        mf: row.MFAC,
        tipo: row.TIPO,
        fech: row.FECH,
        hora: row.HORA,
        nume: row.NUME,
        impo: row.IMPO,
        data: row.DATA,
        text: row.TEXT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/fbin', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM FBIN', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        fbin: row.FBIN,
        nomb: row.NOMB,
        tipo: row.TIPO,
        arch: row.ARCH
      })));
      db.detach();
    });
  });
});

app.get('/api/fere', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM FERE', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        fere: row.FERE,
        fech: row.FECH,
        dscr: row.DSCR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/ferp', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM FERP', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        ferp: row.FERP,
        fech: row.FECH,
        dscr: row.DSCR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/fuer', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM FUER', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        fuer: row.FUER,
        dscr: row.DSCR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/func', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM FUNC', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        func: row.FUNC,
        nom: row.NOM,
        dscr: row.DSCR,
        proc: row.PROC,
        sue: row.SUE,
        resp: row.RESP,
        fech: row.FECH,
        estado: row.ESTADO,
        observaciones: row.OBSERVACIONES,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/gest', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM GEST', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        gest: row.GEST,
        proc: row.PROC,
        suje: row.SUJE,
        tges: row.TGES,
        dscr: row.DSCR,
        fsal: row.FSAL,
        fhec: row.FHEC,
        freg: row.FREG,
        obse: row.OBSE,
        miem: row.MIEM,
        fcon: row.FCON,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/glos', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM GLOS', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        glos: row.GLOS,
        nomb: row.NOMB,
        dscr: row.DSCR,
        tecl: row.TECL,
        text: row.TEXT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/hica', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM HICA', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        hica: row.HICA,
        camp: row.CAMP,
        regi: row.REGI,
        valo: row.VALO,
        fech: row.FECH
      })));
      db.detach();
    });
  });
});

app.get('/api/inac', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM INAC', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        inac: row.INAC,
        tind: row.TIND,
        fech: row.FECH,
        indi: row.INDI,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/juri', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM JURI', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        juri: row.JURI,
        dscr: row.DSCR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/link', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM LINK', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        link: row.LINK,
        ownr: row.OWNR,
        tipo: row.TIPO,
        nume: row.NUME,
        link: row.LINK
      })));
      db.detach();
    });
  });
});

app.get('/api/lsvr', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM LSVR', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        lsvr: row.LSVR
      })));
      db.detach();
    });
  });
});

app.get('/api/mail', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MAIL', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        mail: row.MAIL,
        fech: row.FECH,
        hora: row.HORA,
        miem: row.MIEM,
        asun: row.ASUN,
        dest: row.DEST,
        cuer: row.CUER,
        resu: row.RESU
      })));
      db.detach();
    });
  });
});

app.get('/api/mdlo', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MDLO', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        mdlo: row.MDLO,
        tipo: row.TIPO,
        grup: row.GRUP,
        nomb: row.NOMB,
        dscr: row.DSCR,
        text: row.TEXT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/mfac', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MFAC', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        mfac: row.MFAC,
        emis: row.EMIS,
        dire: row.DIRE,
        ciud: row.CIUD,
        cpos: row.CPOS,
        prov: row.PROV,
        inic: row.INIC,
        pvta: row.PVTA,
        pvtb: row.PVTB,
        cuit: row.CUIT,
        tiva: row.TIVA,
        tibr: row.TIBR,
        nibr: row.NIBR,
        cbu: row.CBU,
        logo: row.LOGO,
        cert: row.CERT,
        text: row.TEXT,
        pswr: row.PSWR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/miem', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MIEM', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        miem: row.MIEM,
        dscr: row.DSCR,
        usua: row.USUA,
        tele: row.TELE,
        emai: row.EMAI,
        mcfg: row.MCFG,
        cert: row.CERT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/mosu', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MOSU', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        mosu: row.MOSU,
        sue: row.SUJE,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/movi', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MOVI', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        movi: row.MOVI,
        proc: row.PROC,
        miem: row.MIEM,
        tipo: row.TIPO,
        avis: row.AVIS,
        hech: row.HECH,
        fech: row.FECH,
        hora: row.HORA,
        dscr: row.DSCR,
        foja: row.FOJA,
        pres: row.PRES,
        repi: row.REPI,
        opri: row.OPRI,
        text: row.TEXT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/msgd', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MSGD', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        msgd: row.MSGD,
        dest: row.DEST,
        esta: row.ESTA
      })));
      db.detach();
    });
  });
});

app.get('/api/noti', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM NOTI', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        noti: row.NOTI,
        dscr: row.DSCR,
        dire: row.DIRE,
        ciud: row.CIUD,
        cpos: row.CPOS,
        tele: row.TELE,
        fax: row.FAX,
        emai: row.EMAI,
        aux1: row.AUX1,
        aux2: row.AUX2,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/ojud', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM OJUD', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        ojud: row.OJUD,
        juri: row.JURI,
        fuer: row.FUER,
        zona: row.ZONA,
        orde: row.ORDE,
        nom1: row.NOM1,
        nom2: row.NOM2,
        dire: row.DIRE,
        ciud: row.CIUD,
        cpos: row.CPOS,
        prov: row.PROV,
        tele: row.TELE,
        fax: row.FAX,
        emai: row.EMAI,
        text: row.TEXT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/otip', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM OTIP', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        otip: row.OTIP,
        proc: row.PROC,
        nume: row.NUME,
        tpro: row.TPRO
      })));
      db.detach();
    });
  });
});

app.get('/api/part', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM PART', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        part: row.PART,
        proc: row.PROC,
        tipo: row.TIPO,
        suje: row.SUJE,
        cint: row.CINT,
        abo1: row.ABO1,
        cia1: row.CIA1,
        abo2: row.ABO2,
        cia2: row.CIA2,
        atel: row.ATEL,
        aema: row.AEMA,
        doco: row.DOCO,
        orde: row.ORDE,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/prue', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM PRUE', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        prue: row.PRUE,
        proc: row.PROC,
        tipo: row.TIPO,
        cuad: row.CUAD,
        pers: row.PERS,
        domi: row.DOMI,
        noti: row.NOTI,
        fec1: row.FEC1,
        hor1: row.HOR1,
        fec2: row.FEC2,
        hor2: row.HOR2,
        fec3: row.FEC3,
        fec4: row.FEC4,
        fec5: row.FEC5,
        fec6: row.FEC6,
        esta: row.ESTA,
        obse: row.OBSE,
        mate: row.MATE,
        prof: row.PROF,
        docu: row.DOCU,
        miem: row.MIEM,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/repr', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM REPR', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        repr: row.REPR,
        proc: row.PROC,
        abog: row.ABOG,
        cint: row.CINT,
        orde: row.ORDE,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/sets', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM SETS', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        sets: row.SETS,
        tipo: row.TIPO,
        usua: row.USUA,
        dscr: row.DSCR,
        arch: row.ARCH,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/suje', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM SUJE', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        suje: row.SUJE,
        pers: row.PERS,
        rela: row.RELA,
        clie: row.CLIE,
        opon: row.OPON,
        terc: row.TERC,
        gest: row.GEST,
        abog: row.ABOG,
        clas: row.CLAS,
        apel: row.APEL,
        nomb: row.NOMB,
        empr: row.EMPR,
        obse: row.OBSE,
        fnac: row.FNAC,
        pnac: row.PNAC,
        docu: row.DOCU,
        eciv: row.ECIV,
        padr: row.PADR,
        madr: row.MADR,
        cony: row.CONY,
        dire: row.DIRE,
        ciud: row.CIUD,
        cpos: row.CPOS,
        prov: row.PROV,
        noti: row.NOTI,
        tele: row.TELE,
        tmov: row.TMOV,
        fax: row.FAX,
        emai: row.EMAI,
        web: row.WEB,
        prof: row.PROF,
        itr1: row.ITR1,
        itr2: row.ITR2,
        itr3: row.ITR3,
        aux1: row.AUX1,
        aux2: row.AUX2,
        aux3: row.AUX3,
        aux4: row.AUX4,
        aux5: row.AUX5,
        aux6: row.AUX6,
        aux7: row.AUX7,
        usua: row.USUA,
        abo1: row.ABO1,
        cia1: row.CIA1,
        abo2: row.ABO2,
        cia2: row.CIA2,
        atel: row.ATEL,
        aema: row.AEMA,
        doco: row.DOCO,
        text: row.TEXT,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/test', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM TEST', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        test: row.TEST,
        dscr: row.DSCR,
        movi: row.MOVI,
        grup: row.GRUP,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/tges', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM TGES', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        tges: row.TGES,
        dscr: row.DSCR,
        cntr: row.CNTR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/tind', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM TIND', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        tind: row.TIND,
        tipo: row.TIPO,
        dscr: row.DSCR,
        modo: row.MODO,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/tpro', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM TPRO', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        tpro: row.TPRO,
        ownr: row.OWNR,
        orde: row.ORDE,
        dscr: row.DSCR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/vinc', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM VINC', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        vinc: row.VINC,
        proc: row.PROC,
        expe: row.EXPE,
        obse: row.OBSE,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/zona', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar with the database');
      return;
    }

    db.query('SELECT * FROM ZONA', function(err, result) {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
        return;
      }

      res.json(result.map(row => ({
        zona: row.ZONA,
        dscr: row.DSCR,
        orde: row.ORDE,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

app.get('/api/msgs', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM MSGS', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        msgs: row.MSGS,
        remi: row.REMI,
        tipo: row.TIPO,
        id: row.ID,
        fech: row.FECH,
        cuer: row.CUER
      })));
      db.detach();
    });
  });
});

app.get('/api/nodo', (req, res) => {
  Firebird.attach(options, function(err, db) {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM NODO', function(err, result) {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        nodo: row.NODO,
        nuno: row.NUNO,
        dscr: row.DSCR,
        edit: row.EDIT
      })));
      db.detach();
    });
  });
});

// Rutas para Clientes (SUJE)
app.get('/api/clientes', (req, res) => {
  Firebird.attach(options, (err, db) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM SUJE', (err, result) => {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        suje: row.SUJE.trim(),
        pers: row.PERS.trim(),
        rela: row.RELA.trim(),
        clie: row.CLIE.trim(),
        opon: row.OPON.trim(),
        terc: row.TERC.trim(),
        gest: row.GEST.trim(),
        abog: row.ABOG.trim(),
        clas: row.CLAS.trim(),
        apel: row.APEL.trim(),
        nomb: row.NOMB.trim(),
        empr: row.EMPR.trim(),
        obse: row.OBSE.trim(),
        fnac: row.FNAC.trim(),
        pnac: row.PNAC.trim(),
        docu: row.DOCU.trim(),
        eciv: row.ECIV.trim(),
        padr: row.PADR.trim(),
        madr: row.MADR.trim(),
        cony: row.CONY.trim(),
        dire: row.DIRE.trim(),
        ciud: row.CIUD.trim(),
        cpos: row.CPOS.trim(),
        prov: row.PROV.trim(),
        noti: row.NOTI.trim(),
        tele: row.TELE.trim(),
        tmov: row.TMOV.trim(),
        fax: row.FAX.trim(),
        emai: row.EMAI.trim(),
        web: row.WEB.trim(),
        prof: row.PROF.trim(),
        itr1: row.ITR1.trim(),
        itr2: row.ITR2.trim(),
        itr3: row.ITR3.trim(),
        aux1: row.AUX1.trim(),
        aux2: row.AUX2.trim(),
        aux3: row.AUX3.trim(),
        aux4: row.AUX4.trim(),
        aux5: row.AUX5.trim(),
        aux6: row.AUX6.trim(),
        aux7: row.AUX7.trim(),
        aux8: row.AUX8.trim(),
        usua: row.USUA.trim(),
        abo1: row.ABO1.trim(),
        cia1: row.CIA1.trim(),
        abo2: row.ABO2.trim(),
        cia2: row.CIA2.trim(),
        atel: row.ATEL.trim(),
        aema: row.AEMA.trim(),
        doco: row.DOCO.trim(),
        text: row.TEXT.trim(),
        edit: row.EDIT.trim()
      })));
      db.detach();
    });
  });
});

app.post('/api/clientes', (req, res) => {
  const { suje, pers, rela, clie, opon, terc, gest, abog, clas, apel, nomb, empr, obse, fnac, pnac, docu, eciv, padr, madr, cony, dire, ciud, cpos, prov, tele, fax, emai, tmov, web, prof, itr1, itr2, itr3, aux1, aux2, aux3, aux4, aux5, aux6, aux7, aux8, usua, abo1, cia1, abo2, cia2, atel, aema, doco, text, edit } = req.body;
  Firebird.attach(options, (err, db) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('INSERT INTO SUJE (SUJE, PERS, RELA, CLIE, OPON, TERC, GEST, ABOG, CLAS, APEL, NOMB, EMPR, OBSE, FNAC, PNAC, DOCU, ECIV, PADR, MADR, CONY, DIRE, CIUD, CPOS, PROV, TELE, FAX, EMAI, TMOV, WEB, PROF, ITR1, ITR2, ITR3, AUX1, AUX2, AUX3, AUX4, AUX5, AUX6, AUX7, AUX8, USUA, ABO1, CIA1, ABO2, CIA2, ATEL, AEMA, DOCO, TEXT, EDIT) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [suje, pers, rela, clie, opon, terc, gest, abog, clas, apel, nomb, empr, obse, fnac, pnac, docu, eciv, padr, madr, cony, dire, ciud, cpos, prov, tele, fax, emai, tmov, web, prof, itr1, itr2, itr3, aux1, aux2, aux3, aux4, aux5, aux6, aux7, aux8, usua, abo1, cia1, abo2, cia2, atel, aema, doco, text, edit], (err, result) => {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.status(201).send('Cliente creado exitosamente');
      db.detach();
    });
  });
});

// Rutas para Casos (PROC)
app.get('/api/casos', (req, res) => {
  Firebird.attach(options, (err, db) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('SELECT * FROM PROC', (err, result) => {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.json(result.map(row => ({
        proc: row.PROC.trim(),
        grup: row.GRUP.trim(),
        tpro: row.TPRO.trim(),
        acto: row.ACTO.trim(),
        dema: row.DEMA.trim(),
        obse: row.OBSE.trim(),
        inic: row.INIC.trim(),
        fina: row.FINA.trim(),
        doco: row.DOCO.trim(),
        ojud: row.OJUD.trim(),
        inst: row.INST.trim(),
        exp1: row.EXP1.trim(),
        exp2: row.EXP2.trim(),
        exp3: row.EXP3.trim(),
        exp4: row.EXP4.trim(),
        supe: row.SUPE.trim(),
        miem: row.MIEM.trim(),
        aux1: row.AUX1.trim(),
        aux2: row.AUX2.trim(),
        aux3: row.AUX3.trim(),
        aux4: row.AUX4.trim(),
        aux5: row.AUX5.trim(),
        aux6: row.AUX6.trim(),
        aux7: row.AUX7.trim(),
        aux8: row.AUX8.trim(),
        edit: row.EDIT.trim()
      })));
      db.detach();
    });
  });
});

app.post('/api/casos', (req, res) => {
  const { proc, grup, tpro, acto, dema, obse, inic, fina, doco, ojud, inst, exp1, exp2, exp3, exp4, supe, miem, aux1, aux2, aux3, aux4, aux5, aux6, aux7, aux8, edit } = req.body;
  Firebird.attach(options, (err, db) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      res.status(500).send('Error al conectar con la base de datos');
      return;
    }

    db.query('INSERT INTO PROC (PROC, GRUP, TPRO, ACTO, DEMA, OBSE, INIC, FINA, DOCO, OJUD, INST, EXP1, EXP2, EXP3, EXP4, SUPE, MIEM, AUX1, AUX2, AUX3, AUX4, AUX5, AUX6, AUX7, AUX8, EDIT) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [proc, grup, tpro, acto, dema, obse, inic, fina, doco, ojud, inst, exp1, exp2, exp3, exp4, supe, miem, aux1, aux2, aux3, aux4, aux5, aux6, aux7, aux8, edit], (err, result) => {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).send('Error al ejecutar la consulta');
        return;
      }

      res.status(201).send('Caso creado exitosamente');
      db.detach();
    });
  });
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
