"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Table.tsx":
/*!***************************!*\
  !*** ./src/app/Table.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Table = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editingUserId, setEditingUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Username: \"\",\n        Phone: \"\",\n        Email: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/users.json\");\n                const data = await response.json();\n                setUsers(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const addUser = (newUser)=>{\n        setUsers([\n            ...users,\n            newUser\n        ]);\n    };\n    const handleEdit = (userId)=>{\n        const userToEdit = users.find((user)=>user.id === userId);\n        setFormData(userToEdit);\n        setEditingUserId(userId);\n    };\n    const handleDelete = (userId)=>{\n        setUsers(users.filter((user)=>user.id !== userId));\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!formData.Username || !formData.Phone || !formData.Email) return;\n        if (editingUserId !== null) {\n            const updatedUsers = users.map((user)=>user.id === editingUserId ? {\n                    ...formData,\n                    id: user.id\n                } : user);\n            setUsers(updatedUsers);\n            setFormData({\n                Username: \"\",\n                Phone: \"\",\n                Email: \"\"\n            });\n            setEditingUserId(null);\n        } else {\n            addUser({\n                ...formData,\n                id: Date.now()\n            });\n            setFormData({\n                Username: \"\",\n                Phone: \"\",\n                Email: \"\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddUserForm, {\n                formData: formData,\n                handleChange: handleChange,\n                handleSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: {\n                    borderCollapse: \"collapse\",\n                    border: \"1px solid black\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        border: \"1px solid greenyellow\",\n                                        padding: \"8px\"\n                                    },\n                                    children: \"Edit user\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        border: \"1px solid black\",\n                                        padding: \"8px\"\n                                    },\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        border: \"1px solid black\",\n                                        padding: \"8px\"\n                                    },\n                                    children: \"Phone\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        border: \"1px solid black\",\n                                        padding: \"8px\"\n                                    },\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        border: \"1px solid black\",\n                                        padding: \"8px\"\n                                    },\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleEdit(user.id),\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            border: \"1px solid black\",\n                                            padding: \"8px\"\n                                        },\n                                        children: user.Username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            border: \"1px solid black\",\n                                            padding: \"8px\"\n                                        },\n                                        children: user.Phone\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            border: \"1px solid black\",\n                                            padding: \"8px\"\n                                        },\n                                        children: user.Email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            border: \"1px solid black\",\n                                            padding: \"8px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleDelete(user.id),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, user.id, true, {\n                                fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Table, \"v7VuqFDPuZg+rVn0d3tUmWpsGEk=\");\n_c = Table;\nconst AddUserForm = (param)=>{\n    let { formData, handleChange, handleSubmit } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        style: {\n            marginBottom: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    color: \"black\"\n                },\n                type: \"text\",\n                placeholder: \"Username\",\n                name: \"Username\",\n                value: formData.Username,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    color: \"black\"\n                },\n                type: \"text\",\n                placeholder: \"Phone\",\n                name: \"Phone\",\n                value: formData.Phone,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    color: \"black\"\n                },\n                type: \"email\",\n                placeholder: \"Email\",\n                name: \"Email\",\n                value: formData.Email,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Add User\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kalem\\\\OneDrive\\\\Desktop\\\\todo-list\\\\src\\\\app\\\\Table.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = AddUserForm;\nconst inputStyle = {\n    marginBottom: \"10px\",\n    padding: \"8px\",\n    fontSize: \"16px\",\n    border: \"1px solid #ccc\",\n    borderRadius: \"4px\"\n};\nconst buttonStyle = {\n    padding: \"8px 16px\",\n    fontSize: \"16px\",\n    backgroundColor: \"#007bff\",\n    color: \"#fff\",\n    border: \"none\",\n    borderRadius: \"4px\",\n    cursor: \"pointer\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\nvar _c, _c1;\n$RefreshReg$(_c, \"Table\");\n$RefreshReg$(_c1, \"AddUserForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VWhDOzs7Ozs7MEJBRVosOERBQUM0QjtnQkFBTWQsT0FBTztvQkFBRWUsT0FBTztnQkFBUTtnQkFDN0JDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1o3QixNQUFLO2dCQUNMQyxPQUFPekIsU0FBU0csS0FBSztnQkFDckJtRCxVQUFVaEM7Ozs7OzswQkFFWiw4REFBQzRCO2dCQUFNZCxPQUFPO29CQUFFZSxPQUFPO2dCQUFRO2dCQUM3QkMsTUFBSztnQkFDTEMsYUFBWTtnQkFDWjdCLE1BQUs7Z0JBQ0xDLE9BQU96QixTQUFTSSxLQUFLO2dCQUNyQmtELFVBQVVoQzs7Ozs7OzBCQUVaLDhEQUFDc0I7Z0JBQU9RLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QjtNQTNCTWxCO0FBNEJOLE1BQU1xQixhQUFhO0lBQ2pCTixjQUFjO0lBQ2RQLFNBQVM7SUFDVGMsVUFBVTtJQUNWbEIsUUFBUTtJQUNSbUIsY0FBYztBQUNoQjtBQUVBLE1BQU1DLGNBQWM7SUFDbEJoQixTQUFTO0lBQ1RjLFVBQVU7SUFDVkcsaUJBQWlCO0lBQ2pCUixPQUFPO0lBQ1BiLFFBQVE7SUFDUm1CLGNBQWM7SUFDZEcsUUFBUTtBQUNWO0FBRUEsK0RBQWVqRSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvVGFibGUudHN4PzdiMTAiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZGl0aW5nVXNlcklkLCBzZXRFZGl0aW5nVXNlcklkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgVXNlcm5hbWU6ICcnLFxyXG4gICAgUGhvbmU6ICcnLFxyXG4gICAgRW1haWw6ICcnXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3VzZXJzLmpzb24nKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFVzZXJzKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhZGRVc2VyID0gKG5ld1VzZXIpID0+IHtcclxuICAgIHNldFVzZXJzKFsuLi51c2VycywgbmV3VXNlcl0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAodXNlcklkKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyVG9FZGl0ID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gdXNlcklkKTtcclxuICAgIHNldEZvcm1EYXRhKHVzZXJUb0VkaXQpO1xyXG4gICAgc2V0RWRpdGluZ1VzZXJJZCh1c2VySWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh1c2VySWQpID0+IHtcclxuICAgIHNldFVzZXJzKHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gdXNlcklkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFmb3JtRGF0YS5Vc2VybmFtZSB8fCAhZm9ybURhdGEuUGhvbmUgfHwgIWZvcm1EYXRhLkVtYWlsKSByZXR1cm47XHJcbiAgICBpZiAoZWRpdGluZ1VzZXJJZCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB1cGRhdGVkVXNlcnMgPSB1c2Vycy5tYXAoKHVzZXIpID0+XHJcbiAgICAgICAgdXNlci5pZCA9PT0gZWRpdGluZ1VzZXJJZCA/IHsgLi4uZm9ybURhdGEsIGlkOiB1c2VyLmlkIH0gOiB1c2VyXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFVzZXJzKHVwZGF0ZWRVc2Vycyk7XHJcbiAgICAgIHNldEZvcm1EYXRhKHsgVXNlcm5hbWU6ICcnLCBQaG9uZTogJycsIEVtYWlsOiAnJyB9KTtcclxuICAgICAgc2V0RWRpdGluZ1VzZXJJZChudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZFVzZXIoeyAuLi5mb3JtRGF0YSwgaWQ6IERhdGUubm93KCkgfSk7XHJcbiAgICAgIHNldEZvcm1EYXRhKHsgVXNlcm5hbWU6ICcnLCBQaG9uZTogJycsIEVtYWlsOiAnJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFkZFVzZXJGb3JtXHJcbiAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxyXG4gICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAvPlxyXG4gICAgICA8dGFibGUgc3R5bGU9e3sgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyZWVueWVsbG93JywgcGFkZGluZzogJzhweCcgfX0+RWRpdCB1c2VyPC90aD5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICc4cHgnIH19PlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICc4cHgnIH19PlBob25lPC90aD5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICc4cHgnIH19PkVtYWlsPC90aD5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICc4cHgnIH19PkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdCh1c2VyLmlkKX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnOHB4JyB9fT57dXNlci5Vc2VybmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnOHB4JyB9fT57dXNlci5QaG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnOHB4JyB9fT57dXNlci5FbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnOHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHVzZXIuaWQpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBZGRVc2VyRm9ybSA9ICh7IGZvcm1EYXRhLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICA8aW5wdXQgIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLlVzZXJuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dCBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lXCJcclxuICAgICAgICBuYW1lPVwiUGhvbmVcIlxyXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5QaG9uZX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXQgc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX1cclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIG5hbWU9XCJFbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLkVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBVc2VyPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICBwYWRkaW5nOiAnOHB4JyxcclxuICBmb250U2l6ZTogJzE2cHgnLFxyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG59O1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgcGFkZGluZzogJzhweCAxNnB4JyxcclxuICBmb250U2l6ZTogJzE2cHgnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDdiZmYnLFxyXG4gIGNvbG9yOiAnI2ZmZicsXHJcbiAgYm9yZGVyOiAnbm9uZScsXHJcbiAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhYmxlIiwidXNlcnMiLCJzZXRVc2VycyIsImVkaXRpbmdVc2VySWQiLCJzZXRFZGl0aW5nVXNlcklkIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIlVzZXJuYW1lIiwiUGhvbmUiLCJFbWFpbCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImFkZFVzZXIiLCJuZXdVc2VyIiwiaGFuZGxlRWRpdCIsInVzZXJJZCIsInVzZXJUb0VkaXQiLCJmaW5kIiwidXNlciIsImlkIiwiaGFuZGxlRGVsZXRlIiwiZmlsdGVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZFVzZXJzIiwibWFwIiwiRGF0ZSIsIm5vdyIsImRpdiIsIkFkZFVzZXJGb3JtIiwidGFibGUiLCJzdHlsZSIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyIiwidGhlYWQiLCJ0ciIsInRoIiwicGFkZGluZyIsInRib2R5IiwiYnV0dG9uIiwib25DbGljayIsInRkIiwiZm9ybSIsIm9uU3VibWl0IiwibWFyZ2luQm90dG9tIiwiaW5wdXQiLCJjb2xvciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiaW5wdXRTdHlsZSIsImZvbnRTaXplIiwiYm9yZGVyUmFkaXVzIiwiYnV0dG9uU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Table.tsx\n"));

/***/ })

});