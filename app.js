const nodemailer=require('nodemailer');
const credentials=require('./credentials');
const fs=require('fs');
const path=require('path');
const student=require('./studentData');



const mailTransport=nodemailer.createTransport({
	service:credentials.mail.service,
	auth: {
		user:credentials.mail.user,
		pass:credentials.mail.password
	}
});

function mail(to,text){
	mailTransport.sendMail({
	from:'Marker',
	to:to,
	subject:student.subject,
	text:text
	},
function(err){
	if(err){
		console.error('Unable to send  email' + err);
	}
});
}
function sendMail(file,emailTo){
	var filePath=path.resolve(__dirname,'studentRecord',file);
	var read=fs.createReadStream(filePath,'utf8');
	var data="";
	read.on('error',function(err){
		console.log(err);
	});
	read.on('data',function(chunk){
		data+=chunk;
	}).on('end',function(){
		mail(emailTo,data);
	});	
}

for(var i=0;i<student.file.length;i++){
	sendMail(student.file[i],student.email[i]);
}
