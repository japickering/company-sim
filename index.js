class Company {
  constructor(name, city, ranks, minPay, investment, staff) {
    (this.staffID = 1),
      (this.name = name),
      (this.city = city),
      (this.ranks = ranks),
      (this.minPay = minPay),
      (this.investment = investment),
      (this.staff = this.getFounder());
  }
  getInvestment() {
    console.log("Investment: $" + this.investment);
  }
  getFounder() {
    return [
      new Lawyer(
        this.staffID++,
        "Jessica Pearson",
        "Manager",
        this.ranks[3],
        this.name,
        100000
      )
    ];
  }
  getWorth() {
    let costs = 0;
    this.staff.forEach(member => {
      costs += member.salary;
    });
    console.log("Annual staff costs: $" + costs);
    const worth = this.investment - costs;
    console.log("Current net worth: $" + worth);
  }
  getProfiles() {
    if (this.staff.length > 0) {
      console.log("Staff profiles found:");
      this.staff.forEach(s => {
        s.sayProps();
      });
    } else {
      console.log("no staff profiles found");
    }
  }
  payStaff() {
    if (this.staff.length > 0) {
      console.log("Paying staff:");
      this.staff.forEach(s => {
        s.paySalary();
      });
    } else {
      console.log("no staff to pay");
    }
  }
  hireSenior(name, skill, job) {
    console.log(this.name + " hires new partner: " + name);
    this.staff.push(
      new Lawyer(this.staffID++, name, skill, job, this.name, 50000)
    );
  }
  hire(name, skill, job) {
    console.log(this.name + " hires new staff: " + name);
    this.staff.push(
      new Lawyer(this.staffID++, name, skill, job, this.name, this.minPay)
    );
  }
  promoteByName(name) {
    if (this.staff.length > 0) {
      this.staff.forEach(s => {
        if (s.name === name && s.job === this.ranks[0]) {
          s.job = this.ranks[1];
          s.salary = 30000;
          console.log(s.name + " promoted to " + s.job);
          s.sayProps();
        } else {
          // no match;
        }
      });
    } else {
      console.log("no staff to promote");
    }
  }
}

class Lawyer {
  constructor(id, name, skill, job, company, salary) {
    (this.id = id),
      (this.name = name),
      (this.skill = skill),
      (this.job = job),
      (this.company = company),
      (this.currency = "$"),
      (this.salary = salary);
    this.earnings = 0;
  }
  paySalary() {
    this.earnings += this.salary;
  }
  sayProps() {
    console.log("staffID: " + this.id);
    console.log(this.name);
    console.log("specialising in " + this.skill);
    console.log("position of " + this.job);
    console.log("salary " + this.currency + this.salary);
    console.log("earnings " + this.currency + this.earnings);
    // console.log("at " + this.company);
  }
}

function init() {
  const firm = new Company(
    "Pearson Hardman",
    "new york",
    ["associate", "junior partner", "senior partner", "named partner"],
    25000,
    500000
  );
  firm.hireSenior("Daniel Hardman", "embezzlement", firm.ranks[2]);
  firm.hire("Harvey Spectre", "best closer", firm.ranks[1]);
  firm.hire("Mike Ross", "faking it", firm.ranks[0]);
  firm.getInvestment();
  firm.getProfiles();
  firm.promoteByName("Mike Ross");
  firm.getWorth();
}
init();
