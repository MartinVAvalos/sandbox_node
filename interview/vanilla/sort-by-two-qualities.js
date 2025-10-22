/* 
Prompt

TODO: You are given an array of task objects, each with a taskid, dueAt (number), and patentid (string).

Goal:
TODO Sort the tasks so that:
* Tasks are grouped by patientid based on the earliest dueAt found for that patentid. Groups with earlier dueAt values come first.
* Within each patentid group, tasks are sorted by their own dueAt in ascending order.

Real World example: Company sees a patient order medicine. Since the patient has multiple orders, why not deliver all the orders at the first due date to save time? Then follow up to deliver the next patient's order and group their orders together as well.


? Example Input:
const unsortedQue = [
  { taskid: 4, dueAt: 7, patentid: "B" },
  { taskid: 11, dueAt: 2, patentid: "C" },
  { taskid: 1, dueAt: 9, patentid: "A" },
  { taskid: 6, dueAt: 6, patentid: "D" },
  { taskid: 2, dueAt: 3, patentid: "B" },
  { taskid: 8, dueAt: 10, patentid: "E" },
  { taskid: 7, dueAt: 1, patentid: "B" },
  { taskid: 2, dueAt: 4, patentid: "C" },
  { taskid: 5, dueAt: 5, patentid: "D" },
];

? Here's what the results are look like

[
  { taskid: 7, dueAt: 1, patentid: 'B' },
  { taskid: 2, dueAt: 3, patentid: 'B' },
  { taskid: 4, dueAt: 7, patentid: 'B' },
  { taskid: 11, dueAt: 2, patentid: 'C' },
  { taskid: 2, dueAt: 4, patentid: 'C' },
  { taskid: 5, dueAt: 5, patentid: 'D' },
  { taskid: 6, dueAt: 6, patentid: 'D' },
  { taskid: 1, dueAt: 9, patentid: 'A' },
  { taskid: 8, dueAt: 10, patentid: 'E' }
]
*/

const unsortedQue = [
    { taskid: 4, dueAt: 7, patentid: "B" },
    { taskid: 11, dueAt: 2, patentid: "C" },
    { taskid: 1, dueAt: 9, patentid: "A" },
    { taskid: 6, dueAt: 6, patentid: "D" },
    { taskid: 2, dueAt: 3, patentid: "B" },
    { taskid: 8, dueAt: 10, patentid: "E" },
    { taskid: 7, dueAt: 1, patentid: "B" },
    { taskid: 2, dueAt: 4, patentid: "C" },
    { taskid: 5, dueAt: 5, patentid: "D" },
];

function sortTasksByPatientAndDueDate(patientOrders) {
    const groups = patientOrders.reduce((acc, curr) => {
        if(!acc.hasOwnProperty(curr.patentid)) { //? have we recorded this patient yet?
            acc[curr.patentid] = { value: [curr], recent: curr.dueAt}

        } else {
            if(curr.dueAt < acc[curr.patentid].recent) {
                acc[curr.patentid].recent = curr.dueAt;
            }
            acc[curr.patentid].value.push(curr)
        }
        return acc;
    }, {});
    console.log('hello')
    
    const group = Object.values(groups);
    console.log(group);
    for (let index = 0; index < group.length; index++) {
        const element = groups[index];
        console.log(element)
    }
}

sortTasksByPatientAndDueDate(unsortedQue);
