import { NextResponse } from "next/server";

// ekhane catch korbe sob route ke, mane tumi api/student/10/moti/... mane
//joto khusi route e jao na keno kono faraq asbe na, data tomar catch er moddhe chole jabe

export async function GET(req, con) {
  console.log(con); // { params: { student: [ 'student', '10', 'moti' ] } }

  const studentData = con.params.student;
  console.log(studentData); //[ 'student', '10', 'moti' ]
  return NextResponse.json({
    message: "Catch All Route Api Success",
    data: studentData,
  });
}
