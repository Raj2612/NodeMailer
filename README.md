# NodeMailer
This is the auotmated email program which Upon executing it reads the data from the individual files(Stored in studentRecord directory) of each Student and using the email stored in email array of module studentData.js it sends email to every students containing different data read from each Student's file
For this to work you need to assign following things
service(In credentials module) – Type of service you are using for sending mail (Gmail,yahoo etc)
files(In studentData module) – Files of each individual student
email(In studentData module) – Emails of each and every student in the same order as files
user(In credentials module) – Your username for the mail account you are using
password(In credentials module) – Password of your email address
