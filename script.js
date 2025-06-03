document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("segment-form");

  // Add Rule Button Logic
  const addRuleBtn = form.querySelector("button[type='button']");
  addRuleBtn.addEventListener("click", function () {
    const ruleDiv = document.createElement("div");
    ruleDiv.classList.add("rule");

    ruleDiv.innerHTML = `
      <select>
        <option>Spend</option>
        <option>Visits</option>
        <option>Inactive Days</option>
      </select>
      <select>
        <option>></option>
        <option><</option>
        <option>=</option>
      </select>
      <input type="text" placeholder="Enter value" />
    `;

    form.insertBefore(ruleDiv, form.querySelector(".logic-toggle"));
  });

  // Form Submission Logic
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Previewing audience size based on selected rules...");
  });
});
