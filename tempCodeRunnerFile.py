
                # Add consecutive lines starting with '>'
                if not line.startswith(">"):
                    IsATask = False
                    hidden_tasks_content.append("\n")  # Add an empty line
                else:
                    hidden_tasks_content.app