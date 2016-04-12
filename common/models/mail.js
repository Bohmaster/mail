module.exports = function(Mail) {

  Mail.sendMail = function(data, cb) {
      
    console.log(data);


    Mail.app.models.Email.send({

      to: data.email,
      from: 'no-reply@arg.az',
      subject: 'Consulta',
      text: data.text,
      html: '<em>Mensaje enviado automáticamente desde AZClub</em><br> Nombre: ' + data.nombre + "<br> Mensaje: " + data.text

    }, function(err, mail) {

      if (err) {
        cb(err);
      }

      cb(null, data);

    });

  };

  Mail.remoteMethod(

    'sendMail',

    {
      accepts: {

        arg: 'data',
        type: 'object',
        description: "Manda un mail"
        //http: function(ctx) {

          //var req = ctx.req;

          //console.log(req.body.data);

          //var result = req.body.data;

          //return result;

        //}

      },

      returns: {

        arg: 'message',
        type: 'string'

      },

      description: "Manda un mail"

    }
  );

};