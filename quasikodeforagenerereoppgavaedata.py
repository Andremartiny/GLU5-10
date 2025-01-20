import os
import re

def process_markdown_files(root_folder):
    hidden_tasks_content = []
    all_markdown_files = []

    # Walk through the directory tree and collect all markdown files
    for root, dirs, files in os.walk(root_folder):
        if "Læringsmål" in dirs:
            folder_path = os.path.join(root, "Læringsmål")
            markdown_files = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if f.endswith(".md")]
            all_markdown_files.extend(markdown_files)

    # Sort files by natural sort order (e.g., 1.1, 1.2, ..., 1.11, 2.1, ...)
    def natural_sort_key(filename):
        basename = os.path.basename(filename)
        return [int(num) if num.isdigit() else num for num in re.split(r'(\d+)', basename)]

    all_markdown_files.sort(key=natural_sort_key)
    # Process each sorted file
    for file_path in all_markdown_files:
        file_name = os.path.basename(file_path)
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            LM = file_name.split()[0]
            LVL = ""
            IsATask = False
            for line in lines:
                if line.startswith("##"):
                    LVL = line.split()[1] if len(line.split()) > 1 else ""
                    
                elif line.startswith("> [!abstract]") or line.startswith("> [!abstract]-") or line.startswith("> [!abstract]+"):
                    # Replace > [!abstract] with > [!hidden] LM LVL
                    print(f"{LM} på {LVL}")
                    hidden_line = line.replace("[!abstract]", f"[!hidden] {LM} {LVL}").replace(f"[!hidden] {LM} {LVL}-", f"[!hidden] {LM} {LVL}").replace(f"[!hidden] {LM} {LVL}+", f"[!hidden] {LM} {LVL}")
                    hidden_tasks_content.append(hidden_line)
                    IsATask = True
                    continue
                
                # Add consecutive lines starting with '>'
                if IsATask:
                    if line.startswith("> [!abstract]"):
                        IsATask = False
                        hidden_tasks_content.append("\n")  # Add an empty line
                    if line.startswith(">"):
                        hidden_tasks_content.append(line)

                    else:
                        
                        IsATask = False
                        hidden_tasks_content.append("\n")  # Add an empty line
            

    # Write the collected content to HIDDENTASKS.md
    with open("HIDDENTASKS.md", 'w', encoding='utf-8') as hidden_file:
        hidden_file.writelines(hidden_tasks_content)

# Specify the root folder to start processing
root_folder = "content"
process_markdown_files(root_folder)
